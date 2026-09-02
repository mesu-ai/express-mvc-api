-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_brandId_fkey";

-- DropIndex
DROP INDEX "variant_combinations_shopId_sku_idx";

-- DropIndex
DROP INDEX "variant_combinations_shopId_shopProductSku_key";

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "brandId" SET NOT NULL;

-- CreateIndex
CREATE INDEX "variant_combinations_shopId_shopProductSku_idx" ON "variant_combinations"("shopId", "shopProductSku");

-- CreateIndex
CREATE UNIQUE INDEX "variant_combinations_shopId_sku_key" ON "variant_combinations"("shopId", "sku");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "brands"("brandId") ON DELETE RESTRICT ON UPDATE CASCADE;