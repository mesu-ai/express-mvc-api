/*
  Warnings:

  - Added the required column `type` to the `column_settings` table without a default value. This is not possible if the table is not empty.

*/
-- column_settings is fully reseed-derived (see src/data/column.ts); safe to clear.
TRUNCATE TABLE "column_settings";

-- AlterTable
ALTER TABLE "column_settings" ADD COLUMN     "type" TEXT NOT NULL;
