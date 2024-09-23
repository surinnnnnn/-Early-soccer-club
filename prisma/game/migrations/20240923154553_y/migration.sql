-- CreateTable
CREATE TABLE `agents` (
    `agent_id` INTEGER NOT NULL,
    `agent_name` VARCHAR(191) NOT NULL,
    `attack` INTEGER NOT NULL DEFAULT 10,
    `defense` INTEGER NOT NULL DEFAULT 10,
    `position` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `agents_agent_name_key`(`agent_name`),
    PRIMARY KEY (`agent_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
