-- CreateTable
CREATE TABLE "banner_placements" (
    "adsLocationId" SERIAL NOT NULL,
    "adsLocationName" TEXT NOT NULL,
    "isActive" TEXT,
    "adsLocationDetails" TEXT NOT NULL,

    CONSTRAINT "banner_placements_pkey" PRIMARY KEY ("adsLocationId")
);
