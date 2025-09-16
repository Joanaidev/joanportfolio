import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { storage } from "./storage";
export async function registerRoutes(app: Express): Promise<Server> {
  // Portfolio uses local-only smart chat system
  // No external API dependencies needed

  const httpServer = createServer(app);

  return httpServer;
}
