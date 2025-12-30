import { Router, Request, Response } from "express";
import userRoutes from "./users/users";
import productRoutes from "./products/products";
import authRouters from "./auth/auth";
import roleRouters from "./roles/roles";

const router = Router();

// Mount different route modules
router.use("/users", userRoutes);
router.use("/products", productRoutes);
router.use("/auth", authRouters);
router.use('/roles', roleRouters);

// Root API route
router.get("/", (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Welcome to Express MVC API",
    version: "1.0.0",
    endpoints: {
      users: "/api/v1/users",
      products: "/api/v1/products",
      auth: "/api/v1/auth",
      roles: "/api/v1/roles",
    },
  });
});

export default router;
