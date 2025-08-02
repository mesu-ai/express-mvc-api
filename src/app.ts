import express, { Application, Request, Response } from "express";
import { config } from "./config";


// Create Express application
const app: Application = express();

// Middleware for parsing JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom middleware

// Health check route
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    status: "OK",
    message: "Server is running",
    timestamp: new Date().toISOString(),
    environment: config.nodeEnv
  });
});


// API routes


// 404 handler
app.use('*', (req: Request, res: Response)=>{
    res.status(404).json({
        success: false,
        message: `Route ${req.originalUrl} not found`
    })
})


// Global error handler (must be last)


export default app;