DROP INDEX "variant_combinations_shopId_sku_key";

CREATE UNIQUE INDEX "variant_combinations_shopId_shopProductSku_key" ON "variant_combinations"("shopId", "shopProductSku");

CREATE INDEX "variant_combinations_shopId_sku_idx" ON "variant_combinations"("shopId", "sku");