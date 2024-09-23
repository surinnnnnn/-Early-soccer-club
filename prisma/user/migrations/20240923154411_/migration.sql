/*
  Warnings:

  - You are about to drop the column `matches` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `matches`,
    ADD COLUMN `match_count` INTEGER NOT NULL DEFAULT 0;
