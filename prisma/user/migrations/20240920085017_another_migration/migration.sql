/*
  Warnings:

  - The primary key for the `team_members` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `team_member_id` on the `team_members` table. All the data in the column will be lost.
  - Added the required column `team_id` to the `team_members` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `team_members` DROP PRIMARY KEY,
    DROP COLUMN `team_member_id`,
    ADD COLUMN `team_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`team_id`);
