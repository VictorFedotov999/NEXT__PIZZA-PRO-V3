-- DropForeignKey
ALTER TABLE "UserBasketProduct" DROP CONSTRAINT "UserBasketProduct_sizeOptionId_fkey";

-- DropForeignKey
ALTER TABLE "UserBasketProduct" DROP CONSTRAINT "UserBasketProduct_typeOptionId_fkey";

-- AlterTable
ALTER TABLE "UserBasketProduct" ALTER COLUMN "sizeOptionId" DROP NOT NULL,
ALTER COLUMN "typeOptionId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "UserBasketProduct" ADD CONSTRAINT "UserBasketProduct_sizeOptionId_fkey" FOREIGN KEY ("sizeOptionId") REFERENCES "SizeOption"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBasketProduct" ADD CONSTRAINT "UserBasketProduct_typeOptionId_fkey" FOREIGN KEY ("typeOptionId") REFERENCES "TypeOption"("id") ON DELETE SET NULL ON UPDATE CASCADE;
