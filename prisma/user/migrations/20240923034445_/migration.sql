/*
  Warnings:

  - You are about to drop the column `odds` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `odds`,
    ADD COLUMN `matches` INTEGER NOT NULL DEFAULT 0;
