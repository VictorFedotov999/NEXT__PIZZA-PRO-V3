-- AlterTable
ALTER TABLE "User" ADD COLUMN     "email" TEXT,
ADD COLUMN     "password" TEXT;

-- CreateTable
CREATE TABLE "OrderUser" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "OrderUser_pkey" PRIMARY KEY ("id")
);
