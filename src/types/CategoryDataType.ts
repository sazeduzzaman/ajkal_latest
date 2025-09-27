// types/api.ts

// Each category item
export interface CategoryDataType {
  id: number;
  name: string;
  name_bangla: string;
  code: string;
  serial: number;
  status: number;
}

// The full API response
export interface ApiResponse<T> {
  status: string;
  message: string;
  data: T;
}

export interface NewsItem {
  id?: number;
  category_id?: number;
  title?: string;
  news_title?: string;
  is_featured?: number;
  thumbnail_img?: string;
  title_img?: string;
  news_time?: string;
  news_short_brief?: string;
  category_name?: string;
  bangla_title?: string;
  published_at?: string;
  summary?: string;
  name?: string;
  bangla_summary?: string;
  slug?: string;
  subCategory_name?: string;
  author?: string;
  category_bangla_name?: string;
  subCategory_bangla_name?: string;
  category_name_bangla?: string;
}
export interface EpaperNewsItem {
  id?: number;
  name?: string;
  epaper_date?: string;
  epaper_image?: string;
  page_number?: number;
  status?: number;
}
