/*
  Warnings:

  - You are about to drop the `banner_images` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE IF EXISTS "banner_images" DROP CONSTRAINT IF EXISTS "banner_images_advertisingInfoAdsInfoId_fkey";

-- AlterTable
ALTER TABLE "banner_contents" ADD COLUMN     "adsImages" JSONB;

-- DropTable
DROP TABLE IF EXISTS "banner_images";
