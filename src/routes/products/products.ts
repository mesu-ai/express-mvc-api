import { verifyAccessToken } from "../../middleware/auth.middleware";
import { Router, Request, Response, NextFunction } from "express";
import { prisma } from "../../config/prisma";

const router = Router();

router.get(
  "/",
  verifyAccessToken,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        categoryId,
        shopId,
        brandId,
        unit,
        status,
        itemsPerPage,
        currentPage,
      } = req.query;

      const categoryIdNum =
        typeof categoryId === "string" ? Number(categoryId) : undefined;
      const shopIdNum = typeof shopId === "string" ? Number(shopId) : undefined;
      const brandIdNum =
        typeof brandId === "string" ? Number(brandId) : undefined;
      const unitStr = typeof unit === "string" ? unit : undefined;
      const statusStr = typeof status === "string" ? status : undefined;

      const where: any = {};

      if (categoryIdNum) {
        where.categoryId = categoryIdNum;
      }

      if (shopIdNum) {
        where.shopId = shopIdNum;
      }

      if (brandIdNum) {
        where.brandId = brandIdNum;
      }

      if (unitStr) {
        where.unit = unitStr;
      }

      if (statusStr) {
        where.status = statusStr;
      }

      const perPage =
        typeof itemsPerPage === "string" && !Number.isNaN(Number(itemsPerPage))
          ? Number(itemsPerPage)
          : 15;
      const page =
        typeof currentPage === "string" && !Number.isNaN(Number(currentPage))
          ? Number(currentPage)
          : 1;

      const totalItems = await prisma.product.count({ where });

      if (totalItems === 0) {
        return res.status(200).json({
          success: true,
          message: "Products retrieved successfully",
          data: [],
          pagination: null,
        });
      }

      const totalPages = perPage > 0 ? Math.ceil(totalItems / perPage) : 0;
      const currentPageNumber = Math.min(Math.max(page, 1), totalPages || 1);
      const skip = (currentPageNumber - 1) * perPage;

      const rows = await prisma.product.findMany({
        where,
        orderBy: { createdAt: "asc" },
        skip,
        take: perPage,
        select: {
          productId: true,
          productName: true,
          thumbnailImages: true,
          shopId: true,
          shop: { select: { shopName: true } },
          brandId: true,
          brand: { select: { brandName: true } },
          categoryId: true,
          category: { select: { categoryName: true } },
          unit: true,
          displayOrder: true,
          updatedAt: true,
          status: true,
          variantCombinations: {
            select: { sku: true, dpPrice: true, mrp: true, sellingPrice: true },
            orderBy: { sellingPrice: "asc" },
            take: 1,
          },
        },
      });

      const pagedData = rows.map(({ shop, brand, category, thumbnailImages, variantCombinations, ...product }) => ({
        ...product,
        thumbnailImage: Array.isArray(thumbnailImages) ? thumbnailImages[0] ?? null : null,
        shopName: shop.shopName,
        brandName: brand?.brandName ?? null,
        categoryName: category.categoryName,
        sku: variantCombinations[0]?.sku ?? null,
        dpPrice: variantCombinations[0]?.dpPrice ?? null,
        mrp: variantCombinations[0]?.mrp ?? null,
        sellingPrice: variantCombinations[0]?.sellingPrice ?? null,
      }));

      return res.status(200).json({
        success: true,
        message: "Products retrieved successfully",
        data: pagedData,
        pagination: {
          currentPage: currentPageNumber,
          itemsPerPage: perPage,
          totalPages,
          totalItems,
        },
      });
    } catch (err) {
      return next(err);
    }
  },
);

router.get(
  "/sku",
  verifyAccessToken,
  async (req: Request, res: Response, next: NextFunction) => {
   try {
     const { shopId, sku } = req.query;
     const skuStr = String(sku);

     const product = await prisma.product.findFirst({
       where: {
         shopId: Number(shopId),
         variantCombinations: { some: { sku: skuStr } },
       },
       include: {
         variantCombinations: {
           where: { sku: skuStr },
           include: { options: true },
         },
       },
     });

     const matchedCombination = product?.variantCombinations[0];

     const searchProduct = {
       productId: product?.productId,
       shopId: product?.shopId,
       productName: product?.productName,
      //  productTitle: "DHEU WOMENS WIDE LEG DENIM",
       sku: matchedCombination?.sku,
       subStyle: matchedCombination?.subStyle,
       categoryId: product?.categoryId,
       thumbnailImage: product?.thumbnailImages,
       productUrl: product?.productUrl,
      //  rootCategoryId: 1,
       productPrice: matchedCombination?.mrp,
      //  discountAmount: product?.s,
       burnAmount: 0,
       productQuantity: matchedCombination?.stock,
      //  sellerProductSku: p,
      //  shopProductSku: produc,
       shopName: product?.shopId, // pass showname
       categoryName: product?.categoryId, //pass category name
       productColorAndSizes: [
         {
           variationWiseProductId: 1409427,
           variantOptionId: 1056,
           variantOptionText: "Indigo",
           variantName: "Color",
         },
         {
           variationWiseProductId: 1409428,
           variantOptionId: 1062,
           variantOptionText: "28",
           variantName: "Size",
         },
       ],
       
     };

     console.log(searchProduct);
     if (!product) {
       return res.status(404).json({
         success: false,
         message: "Product not found",
         data: {},
       });
     }
     return res.status(200).json({
       success: true,
       message: "Product retrieved successfully",
       data: searchProduct,
     });
   } catch (err) {
     return next(err);
   }
  },
);

router.get(
  "/:id",
  verifyAccessToken,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      const product = await prisma.product.findUnique({
        where: { productId: Number(id) },
        include: { variantCombinations: { include: { options: true } } },
      });

      console.log("Fetched product:", product);

      if (!product) {
        return res.status(404).json({
          success: false,
          message: "Product not found",
          data: {},
        });
      }

      return res.status(200).json({
        success: true,
        message: "Product retrieved successfully",
        data: product,
      });
    } catch (err) {
      return next(err);
    }
  },
);

export default router;
