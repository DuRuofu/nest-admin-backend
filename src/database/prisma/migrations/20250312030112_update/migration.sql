/*
  Warnings:

  - You are about to drop the column `avatar_url` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `avatar_url`,
    ADD COLUMN `avatar` VARCHAR(191) NOT NULL DEFAULT 'https://image-1308319148.cos.ap-chengdu.myqcloud.com/main/%E4%B8%AA%E4%BA%BA%E5%A4%B4%E5%83%8F.png',
    ADD COLUMN `nickname` VARCHAR(191) NOT NULL DEFAULT '未命名';
