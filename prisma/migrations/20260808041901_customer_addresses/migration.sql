-- CreateTable
CREATE TABLE "customer_addresses" (
    "customerAddressId" SERIAL NOT NULL,
    "customerId" INTEGER NOT NULL,
    "recipientName" TEXT NOT NULL,
    "contactNumber" TEXT NOT NULL,
    "addressType" INTEGER NOT NULL,
    "postCode" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "createDae" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "shippingStatus" TEXT,
    "countryId" INTEGER NOT NULL,
    "countryName" TEXT NOT NULL,
    "cityId" INTEGER NOT NULL,
    "cityName" TEXT NOT NULL,
    "areaName" TEXT NOT NULL,
    "areaId" INTEGER NOT NULL,

    CONSTRAINT "customer_addresses_pkey" PRIMARY KEY ("customerAddressId")
);
