import { Request, Response, Router, NextFunction } from "express";
import { prisma } from "../../config/prisma";
import { verifyAccessToken } from "../../middleware/auth.middleware";

const router = Router();

router.get(
  "/citywithareas", verifyAccessToken,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { keyword } = req.query;
      const where: any = {};
      const keywordStr =
        typeof keyword === "string" ? keyword.toLowerCase().trim() : undefined;
      if (keywordStr) {
        where.cityName = { contains: keywordStr, mode: "insensitive" };
      }
      const addresses = await prisma.cityWithArea.findMany({
        where,
      });

      const totalItems = await prisma.cityWithArea.count({ where });

      if (totalItems === 0) {
        return res.status(200).json({
          success: true,
          message: "City with areas retrieved successfully",
          data: [],
          pagination: {
            currentPage: 0,
            itemsPerPage: totalItems,
            totalPages: 0,
            totalItems: 0,
          },
        });
      }

      return res.status(200).json({
        success: true,
        message: "City with areas retrieved successfully",
        data: addresses,
        pagination: {
          currentPage: 1,
          itemsPerPage: totalItems,
          totalPages: 1,
          totalItems,
        },
      });
    } catch (err) {
      return next(err);
    }
  },
);



export default router;
