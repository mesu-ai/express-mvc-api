-- AlterTable
CREATE SEQUENCE size_charts_sizechartid_seq;
ALTER TABLE "size_charts" ALTER COLUMN "sizeChartId" SET DEFAULT nextval('size_charts_sizechartid_seq');
ALTER SEQUENCE size_charts_sizechartid_seq OWNED BY "size_charts"."sizeChartId";

-- CreateTable
CREATE TABLE "banner_dimensions" (
    "adsImageTypeId" SERIAL NOT NULL,
    "imageTypeName" TEXT NOT NULL,
    "isActive" TEXT,
    "dimensionDescription" TEXT,
    "imageHeight" INTEGER NOT NULL,
    "imageWidth" INTEGER NOT NULL,
    "imageMobileHeight" INTEGER NOT NULL DEFAULT 0,
    "imageMobileWidth" INTEGER NOT NULL DEFAULT 0,
    "imageUnit" TEXT DEFAULT 'px',

    CONSTRAINT "banner_dimensions_pkey" PRIMARY KEY ("adsImageTypeId")
);
