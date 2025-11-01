import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Users retrieved successfully",
    data: {
      name: "mesu",
      age: 24,
      gender: "male",
      email: "mesu@example.com",
    },
  });
});

export default router;
