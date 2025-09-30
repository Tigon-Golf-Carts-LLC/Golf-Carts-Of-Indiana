import express, { type Request, Response, NextFunction } from "express";
import { createServer } from "http";
import path from "path";
import fs from "fs";
import routes from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from attached_assets directory
app.use('/attached_assets', express.static('attached_assets'));

// Production-specific static file serving
// This bypasses serveStatic which uses import.meta.dirname that gets baked incorrectly by esbuild
function serveBundledStatic(app: express.Express) {
  const staticDir = path.resolve(process.cwd(), "dist", "public");
  
  if (!fs.existsSync(staticDir)) {
    throw new Error(
      `Could not find the build directory: ${staticDir}, make sure to build the client first`,
    );
  }

  log(`Serving static files from: ${staticDir}`, "express");
  
  // Serve built client files
  app.use(express.static(staticDir));

  // SPA fallback - serve index.html for all non-API routes only
  // Using regex to exclude /api paths entirely, preserving API 404/error responses
  app.get(/^\/(?!api).*/, (_req, res) => {
    res.sendFile(path.resolve(staticDir, "index.html"));
  });
}

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  app.use(routes);
  const server = createServer(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveBundledStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '5000', 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
