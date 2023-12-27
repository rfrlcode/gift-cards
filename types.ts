export interface Deal {
  id: number;
  deal_title: string;
  is_price: string;
  was_price: string;
  discount_code?: string;
  seller_name: string;
  link_to_deal: string;
  createdAt: string;
  short_offer: string;
  image: string;
}