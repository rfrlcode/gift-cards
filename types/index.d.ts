export type SiteConfig = {
  name: string;
  description: string;
  url: string;
};

export interface Deal {
  id: string;
  deal_title: string;
  brand_name: string;
  short_offer?: string | undefined;
  BrandName: string;
  seller_name: string | undefined;
  expiration_date?: Date;
  discount_code?: string;
  is_price: string;
  was_price?: string | undefined;
  link_to_image: string;
  link_to_deal: string;
  createdAt?: Date;
}

export interface SiteMetadata {
  title: string;
  author: string;
  headerTitle: string;
  description: string;
  language: string;
  siteUrl: string;
  locale: string;
}
