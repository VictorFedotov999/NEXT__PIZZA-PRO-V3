/*
  Warnings:

  - You are about to drop the `BasketItem` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[title]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "BasketItem" DROP CONSTRAINT "BasketItem_productId_fkey";

-- DropForeignKey
ALTER TABLE "BasketItem" DROP CONSTRAINT "BasketItem_userBasketId_fkey";

-- DropIndex
DROP INDEX "UserAuth_password_key";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "quantity" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "UserBasket" ADD COLUMN     "productId" INTEGER,
ADD COLUMN     "quantity" INTEGER NOT NULL DEFAULT 1;

-- DropTable
DROP TABLE "BasketItem";

-- CreateIndex
CREATE UNIQUE INDEX "Product_title_key" ON "Product"("title");

-- AddForeignKey
ALTER TABLE "UserBasket" ADD CONSTRAINT "UserBasket_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
