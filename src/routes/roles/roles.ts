import { roles } from "../../data/role";
import { verifyAccessToken } from "../../middleware/auth.middleware";
import { Router, Request, Response } from "express";

const router = Router();

router.get("/", verifyAccessToken, (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Roles retrieved successfully",
    data: roles,
  });
});

router.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const roleData = roles.find((role) => role.id === Number(id));

  if (!roleData) {
    return res.status(404).json({
      success: false,
      message: "Role not found",
      data: {},
    });
  }

  return res.status(200).json({
    success: true,
    message: "Role Retrived successfylly",
    data: roleData,
  });
});

export default router;