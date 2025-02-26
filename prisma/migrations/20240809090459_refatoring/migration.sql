/*
  Warnings:

  - Made the column `title` on table `Notes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `note` on table `Notes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `favorite` on table `Notes` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Notes" ALTER COLUMN "title" SET NOT NULL,
ALTER COLUMN "note" SET NOT NULL,
ALTER COLUMN "favorite" SET NOT NULL;
