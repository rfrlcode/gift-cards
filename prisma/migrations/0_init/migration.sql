-- CreateTable
CREATE TABLE "Deal" (
    "id" SERIAL NOT NULL,
    "deal_title" TEXT NOT NULL,
    "is_price" TEXT NOT NULL,
    "was_price" TEXT NOT NULL,
    "discount_code" TEXT NOT NULL,
    "seller_name" TEXT NOT NULL,
    "link_to_deal" TEXT NOT NULL,
    "short_offer" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Deal_pkey" PRIMARY KEY ("id")
);

