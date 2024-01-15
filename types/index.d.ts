export type SiteConfig = {
  name: string;
  description: string;
  url: string;
};

export interface Deal {
  id: number;
  deal_title: string;
  is_price: string;
  was_price?: string | undefined;
  discount_code?: string;
  seller_name?: string | undefined;
  link_to_deal: string;
  brand_name: string;
  createdAt?: Date;
  short_offer?: string | undefined;
  image?: string;
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
