-- CreateTable
CREATE TABLE "city_with_area" (
    "cityId" INTEGER NOT NULL,
    "cityName" TEXT NOT NULL,
    "areas" JSONB,

    CONSTRAINT "city_with_area_pkey" PRIMARY KEY ("cityId")
);
