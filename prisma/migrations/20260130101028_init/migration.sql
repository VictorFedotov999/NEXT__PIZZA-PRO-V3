/*
  Warnings:

  - A unique constraint covering the columns `[productId,sizeOptionId,typeOptionId]` on the table `ProductItem` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ProductItem_productId_sizeOptionId_typeOptionId_key" ON "ProductItem"("productId", "sizeOptionId", "typeOptionId");
