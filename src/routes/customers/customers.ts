import { Request, Response, Router, NextFunction } from "express";
import { prisma } from "../../config/prisma";
import { verifyAccessToken } from "../../middleware/auth.middleware";

const router = Router();

router.get(
  "/address", verifyAccessToken,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { contactNumber } = req.query;
      const where: any = {};
      if (contactNumber) {
        where.contactNumber = { equals: contactNumber };
      }

      const addresses = await prisma.customerAddress.findMany({
        where,
      });

      const totalItems = await prisma.customerAddress.count({ where });

      if (totalItems === 0) {
        return res.status(200).json({
          success: true,
          message: "Customer addresses retrieved successfully",
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
        message: "Customer addresses retrieved successfully",
        data: {
          customerId: addresses[0].customerId,
          customerName: addresses[0].recipientName,
          customerContactNumber: addresses[0].contactNumber,
          addresses,
        },
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
