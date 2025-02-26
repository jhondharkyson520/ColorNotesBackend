/*
  Warnings:

  - Added the required column `color` to the `Notes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `favorite` to the `Notes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Notes" ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "favorite" BOOLEAN NOT NULL;
