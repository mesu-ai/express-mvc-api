-- CreateTable
CREATE TABLE "banner_contents" (
    "adsInfoId" SERIAL NOT NULL,
    "adsName" TEXT NOT NULL,
    "adsDetails" TEXT,
    "adsTypeId" INTEGER NOT NULL,
    "adsTypeName" TEXT NOT NULL,
    "imageTypeId" INTEGER NOT NULL,
    "imageTypeName" TEXT NOT NULL,
    "adsLocationId" INTEGER NOT NULL,
    "adsLocationName" TEXT NOT NULL,
    "isDelete" TEXT,
    "projectId" INTEGER,
    "bannerTitle" TEXT,

    CONSTRAINT "banner_contents_pkey" PRIMARY KEY ("adsInfoId")
);
