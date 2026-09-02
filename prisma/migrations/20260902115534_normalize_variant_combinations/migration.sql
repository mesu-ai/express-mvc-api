-- AlterTable
CREATE SEQUENCE products_productid_seq;
ALTER TABLE "products" DROP COLUMN "dpPrice",
DROP COLUMN "endDate",
DROP COLUMN "mrp",
DROP COLUMN "sellingPrice",
DROP COLUMN "sku",
DROP COLUMN "startDate",
DROP COLUMN "stock",
DROP COLUMN "strapMeterial",
DROP COLUMN "subStyle",
DROP COLUMN "variantCombinations",
ADD COLUMN     "strapMaterial" TEXT,
ALTER COLUMN "productId" SET DEFAULT nextval('products_productid_seq'),
ALTER COLUMN "shopId" SET NOT NULL,
DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "updatedAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER SEQUENCE products_productid_seq OWNED BY "products"."productId";

-- AlterTable
ALTER TABLE "column_settings" ADD COLUMN     "currency" BOOLEAN;

-- CreateTable
CREATE TABLE "variant_combinations" (
    "id" SERIAL NOT NULL,
    "sku" TEXT NOT NULL,
    "subStyle" TEXT,
    "shopProductSku" TEXT,
    "stock" INTEGER NOT NULL,
    "dpPrice" INTEGER NOT NULL,
    "mrp" INTEGER NOT NULL,
    "sellingPrice" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "burnAmount" INTEGER NOT NULL,
    "commissionAmount" INTEGER NOT NULL,
    "inventoryTypeId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    "shopId" INTEGER NOT NULL,

    CONSTRAINT "variant_combinations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "variant_combination_options" (
    "id" SERIAL NOT NULL,
    "combinationId" INTEGER NOT NULL,
    "variantOptionId" INTEGER NOT NULL,
    "variantOptionText" TEXT NOT NULL,

    CONSTRAINT "variant_combination_options_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "variant_combinations_productId_idx" ON "variant_combinations"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "variant_combinations_shopId_sku_key" ON "variant_combinations"("shopId", "sku");

-- CreateIndex
CREATE UNIQUE INDEX "variant_combination_options_combinationId_variantOptionId_key" ON "variant_combination_options"("combinationId", "variantOptionId");

-- CreateIndex
CREATE INDEX "products_shopId_idx" ON "products"("shopId");

-- CreateIndex
CREATE INDEX "products_categoryId_idx" ON "products"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "products_productId_shopId_key" ON "products"("productId", "shopId");

-- AddForeignKey
ALTER TABLE "variant_combinations" ADD CONSTRAINT "variant_combinations_productId_shopId_fkey" FOREIGN KEY ("productId", "shopId") REFERENCES "products"("productId", "shopId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "variant_combination_options" ADD CONSTRAINT "variant_combination_options_combinationId_fkey" FOREIGN KEY ("combinationId") REFERENCES "variant_combinations"("id") ON DELETE CASCADE ON UPDATE CASCADE;
