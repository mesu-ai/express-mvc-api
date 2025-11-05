import { verifyAccessToken } from "../../middleware/auth.middleware";
import { Router, Request, Response } from "express";

const router= Router();

router.get("/", verifyAccessToken, (req: Request, res: Response) => {
  console.log('product assess request:', req);
  res.status(200).json({
    success: true,
    message: "Products retrieved successfully",
    data: [
      { id: 1, name: "iPhone 15 pro max", color: "black" },
      { id: 2, name: "iPhone 16 pro max", color: "red" },
      { id: 3, name: "iPhone 17 pro max", color: "red" },
      { id: 4, name: "iPhone 18 pro max", color: "red" },
      { id: 5, name: "iPhone 19 pro max", color: "red" },
    ],
  });
});

export default router;