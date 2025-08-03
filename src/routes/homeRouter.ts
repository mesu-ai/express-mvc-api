import { Request, Response, Router } from "express";

const routers = Router();

routers.get("/", (req: Request, res: Response) => {
  res.json({
    message: "API is working",
    version: "1.0.0",
  });
});

routers.get("/users", (req: Request, res: Response) => {
  res.status(200).json({
    message: "User found",
    success: true,
    data: {
      name: "mesu",
      age: 24,
      gender: "male",
    },
  });
});

export default routers;
