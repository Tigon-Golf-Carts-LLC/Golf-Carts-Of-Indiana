import express, { Router } from "express";
import crypto from "crypto";
import { z } from "zod";
import storage from "./storage";
import { insertVehicleSchema, contactFormSchema } from "@shared/schema";
import { sendContactEmail } from "./email";

const router = Router();

// Vehicle routes
router.get("/api/vehicles", async (req, res) => {
  try {
    const { brand, category } = req.query;
    let vehicles = await storage.getVehicles();
    
    if (brand && typeof brand === "string") {
      vehicles = vehicles.filter(v => v.brand === brand);
    }
    
    if (category && typeof category === "string") {
      vehicles = vehicles.filter(v => v.category === category);
    }
    
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch vehicles" });
  }
});

router.get("/api/vehicles/:id", async (req, res) => {
  try {
    const vehicle = await storage.getVehicleById(req.params.id);
    if (!vehicle) {
      return res.status(404).json({ error: "Vehicle not found" });
    }
    res.json(vehicle);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch vehicle" });
  }
});

router.get("/api/vehicles/brand/:brand", async (req, res) => {
  try {
    const { brand } = req.params;
    const vehicles = await storage.getVehiclesByBrand(brand);
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch vehicles by brand" });
  }
});

router.post("/api/vehicles", async (req, res) => {
  try {
    const validatedData = insertVehicleSchema.parse(req.body);
    const vehicle = await storage.createVehicle(validatedData);
    res.status(201).json(vehicle);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Invalid vehicle data", details: error.errors });
    }
    res.status(500).json({ error: "Failed to create vehicle" });
  }
});

router.put("/api/vehicles/:id", async (req, res) => {
  try {
    const validatedData = insertVehicleSchema.partial().parse(req.body);
    const vehicle = await storage.updateVehicle(req.params.id, validatedData);
    
    if (!vehicle) {
      return res.status(404).json({ error: "Vehicle not found" });
    }
    
    res.json(vehicle);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Invalid vehicle data", details: error.errors });
    }
    res.status(500).json({ error: "Failed to update vehicle" });
  }
});

router.delete("/api/vehicles/:id", async (req, res) => {
  try {
    const deleted = await storage.deleteVehicle(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Vehicle not found" });
    }
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete vehicle" });
  }
});

// Contact form route
router.post("/api/contact", async (req, res) => {
  try {
    const validatedData = contactFormSchema.parse(req.body);
    
    // Send email with contact form data
    const emailSent = await sendContactEmail(validatedData);
    
    if (!emailSent) {
      return res.status(500).json({ 
        error: "Failed to send email. Please try again or contact us directly." 
      });
    }

    // Store the contact form data (optional)
    const success = await storage.submitContactForm(validatedData);
    
    res.json({ 
      success: true, 
      message: "Contact form submitted successfully. We'll get back to you soon!" 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Invalid form data", details: error.errors });
    }
    res.status(500).json({ error: "Failed to submit contact form" });
  }
});

// SEO Routes - Serve sitemap.xml and robots.txt from public folder
// TIGON IOT lead relay (only used when the site runs on this Node server and the
// client is built with VITE_TIGON_LEAD_ENDPOINT=/api/lead). Forwards the browser's
// multipart body unchanged and signs it with this webhook's own secret:
//   X-Tigon-Signature: sha256=<hex HMAC-SHA256 of the raw body>
// TIGON_WEBHOOK_URL and TIGON_WEBHOOK_SECRET come from server environment variables only.
router.post(
  "/api/lead",
  express.raw({ type: () => true, limit: "35mb" }),
  async (req, res) => {
    const url = process.env.TIGON_WEBHOOK_URL;
    const secret = process.env.TIGON_WEBHOOK_SECRET;
    if (!url || !secret) {
      return res.status(500).json({ ok: false, error: "Lead form is not configured. Please call us at 1-844-844-6638." });
    }
    const body: Buffer = Buffer.isBuffer(req.body) ? req.body : Buffer.alloc(0);
    const signature = "sha256=" + crypto.createHmac("sha256", secret).update(body).digest("hex");
    try {
      const upstream = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": req.get("content-type") || "application/octet-stream",
          "X-Tigon-Signature": signature,
          "X-Forwarded-For": req.ip || "",
          "User-Agent": req.get("user-agent") || "",
        },
        body,
      });
      const text = await upstream.text();
      res.status(upstream.status).type(upstream.headers.get("content-type") || "application/json").send(text);
    } catch (error) {
      console.error("TIGON lead relay failed:", error);
      res.status(502).json({ ok: false, error: "Sorry, something went wrong. Please try again or call us." });
    }
  },
);

router.get('/sitemap.xml', (req, res) => {
  res.set('Content-Type', 'application/xml');
  res.sendFile('sitemap.xml', { root: 'client/public' });
});

router.get('/robots.txt', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.sendFile('robots.txt', { root: 'client/public' });
});

export default router;
