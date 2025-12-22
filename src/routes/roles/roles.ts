import { roles } from "../../data/role";
import { verifyAccessToken } from "@/middleware/auth.middleware";
import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Roles retrieved successfully",
    data: roles,
  });
});

export default router;