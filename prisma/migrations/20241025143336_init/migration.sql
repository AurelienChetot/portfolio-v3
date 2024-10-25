/*
  Warnings:

  - Added the required column `categorie` to the `Projet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Projet` ADD COLUMN `categorie` VARCHAR(191) NOT NULL;
