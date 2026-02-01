-- AlterTable
CREATE SEQUENCE basketitem_id_seq;
ALTER TABLE "BasketItem" ALTER COLUMN "id" SET DEFAULT nextval('basketitem_id_seq');
ALTER SEQUENCE basketitem_id_seq OWNED BY "BasketItem"."id";

-- AlterTable
CREATE SEQUENCE category_id_seq;
ALTER TABLE "Category" ALTER COLUMN "id" SET DEFAULT nextval('category_id_seq');
ALTER SEQUENCE category_id_seq OWNED BY "Category"."id";

-- AlterTable
CREATE SEQUENCE filter_id_seq;
ALTER TABLE "Filter" ALTER COLUMN "id" SET DEFAULT nextval('filter_id_seq');
ALTER SEQUENCE filter_id_seq OWNED BY "Filter"."id";

-- AlterTable
CREATE SEQUENCE ingredient_id_seq;
ALTER TABLE "Ingredient" ALTER COLUMN "id" SET DEFAULT nextval('ingredient_id_seq');
ALTER SEQUENCE ingredient_id_seq OWNED BY "Ingredient"."id";

-- AlterTable
CREATE SEQUENCE product_id_seq;
ALTER TABLE "Product" ALTER COLUMN "id" SET DEFAULT nextval('product_id_seq');
ALTER SEQUENCE product_id_seq OWNED BY "Product"."id";

-- AlterTable
CREATE SEQUENCE productitem_id_seq;
ALTER TABLE "ProductItem" ALTER COLUMN "id" SET DEFAULT nextval('productitem_id_seq');
ALTER SEQUENCE productitem_id_seq OWNED BY "ProductItem"."id";

-- AlterTable
CREATE SEQUENCE productitemingredient_id_seq;
ALTER TABLE "ProductItemIngredient" ALTER COLUMN "id" SET DEFAULT nextval('productitemingredient_id_seq');
ALTER SEQUENCE productitemingredient_id_seq OWNED BY "ProductItemIngredient"."id";

-- AlterTable
CREATE SEQUENCE sizeoption_id_seq;
ALTER TABLE "SizeOption" ALTER COLUMN "id" SET DEFAULT nextval('sizeoption_id_seq');
ALTER SEQUENCE sizeoption_id_seq OWNED BY "SizeOption"."id";

-- AlterTable
CREATE SEQUENCE typeoption_id_seq;
ALTER TABLE "TypeOption" ALTER COLUMN "id" SET DEFAULT nextval('typeoption_id_seq');
ALTER SEQUENCE typeoption_id_seq OWNED BY "TypeOption"."id";

-- AlterTable
CREATE SEQUENCE user_id_seq;
ALTER TABLE "User" ALTER COLUMN "id" SET DEFAULT nextval('user_id_seq');
ALTER SEQUENCE user_id_seq OWNED BY "User"."id";

-- AlterTable
CREATE SEQUENCE userbasket_id_seq;
ALTER TABLE "UserBasket" ALTER COLUMN "id" SET DEFAULT nextval('userbasket_id_seq');
ALTER SEQUENCE userbasket_id_seq OWNED BY "UserBasket"."id";
