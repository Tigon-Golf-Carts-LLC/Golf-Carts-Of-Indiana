import { z } from "zod";

// Vehicle schema
export const vehicleSchema = z.object({
  id: z.string(),
  name: z.string(),
  brand: z.string(),
  category: z.string(),
  price: z.number(),
  description: z.string(),
  images: z.array(z.string()),
  externalUrl: z.string().optional(),
  specifications: z.object({
    topSpeed: z.string(),
    range: z.string(),
    seatingCapacity: z.number(),
    batteryType: z.string(),
    chargingTime: z.string(),
    payload: z.string(),
  }),
  features: z.array(z.string()),
  inStock: z.boolean(),
  isNew: z.boolean(),
});

export type Vehicle = z.infer<typeof vehicleSchema>;

// Insert schemas
export const insertVehicleSchema = vehicleSchema.omit({
  id: true,
});

export type InsertVehicle = z.infer<typeof insertVehicleSchema>;

// Contact form schema
export const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  interest: z.enum(["sales", "service", "parts", "general"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactForm = z.infer<typeof contactFormSchema>;

// Golf Cart schema for inventory
export const golfCartSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.enum(["new", "used", "custom"]),
  imageUrl: z.string(),
  brand: z.string(),
  model: z.string(),
  year: z.number().optional(),
  featured: z.boolean().default(false),
});

export type GolfCart = z.infer<typeof golfCartSchema>;

// Blog post schema
export const blogPostSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  seoTitle: z.string(),
  metaDescription: z.string(),
  publishDate: z.string(),
  excerpt: z.string(),
  heroImage: z.string(),
  heroImageAlt: z.string(),
  heroImagePrompt: z.string(),
  content: z.string(),
  h1: z.string(),
  featured: z.boolean().default(false),
});

export type BlogPost = z.infer<typeof blogPostSchema>;

export const insertBlogPostSchema = blogPostSchema.omit({
  id: true,
});

export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
