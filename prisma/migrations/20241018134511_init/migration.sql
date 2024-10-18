-- CreateTable
CREATE TABLE `Projet` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `techno` VARCHAR(191) NOT NULL,
    `design` VARCHAR(191) NOT NULL,
    `githubLink` VARCHAR(191) NOT NULL,
    `siteLink` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
