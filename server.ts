import app from "./src/app";
import { config } from "./src/config";

const PORT = config.port || 4001;

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📝 Environment: ${config.nodeEnv}`);
  console.log(`🌐 API URL: http://localhost:${PORT}${config.apiPrefix}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err: Error) => {
  console.error("❌ Unhandled Promise Rejection:", err.message);
  process.exit(1);
});

// Handle uncaught exceptions
process.on("uncaughtException", (err: Error) => {
  console.error("❌ Unhandled Promise Exception:", err.message);
  process.exit(1);
});


// import express from 'express';

// const app = express();
// const PORT = 4000;

// // Basic middleware
// app.use(express.json());

// // Simple test route
// app.get('/', (req, res) => {
//   res.json({ message: 'Server is working!' });
// });

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });