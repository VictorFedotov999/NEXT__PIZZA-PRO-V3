-- DropForeignKey
ALTER TABLE "UserBasketProduct" DROP CONSTRAINT "UserBasketProduct_productId_fkey";

-- AlterTable
ALTER TABLE "UserBasketProduct" ALTER COLUMN "productId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "UserBasketProduct" ADD CONSTRAINT "UserBasketProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
