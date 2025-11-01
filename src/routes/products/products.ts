import { Router, Request, Response } from "express";

const router= Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Products retrieved successfully",
    data: [
      { id: 1, name: "iPhone 16 pro", color: "black" },
      { id: 2, name: "iPhone 16 pro max", color: "red" },
    ],
  });
});

export default router;