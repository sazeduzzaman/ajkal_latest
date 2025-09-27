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
  id?: number | undefined; // fallback: 0
  category_id?: number | undefined; // fallback: 0
  title?: string | undefined; // fallback: "No Title"
  news_title?: string | undefined; // fallback: "No Title"
  is_featured?: number | undefined; // fallback: 0
  thumbnail_img?: string | undefined; // fallback: "/images/placeholder.webp"
  title_img?: string | undefined; // fallback: "/images/placeholder.webp"
  news_time?: string | undefined; // fallback: "Unknown Time"
  news_author?: string | undefined; // fallback: "Unknown Time"
  news_detail?: string | undefined; // fallback: "Unknown Time"
  news_short_brief?: string | undefined; // fallback: ""
  category_name?: string | undefined; // fallback: "other"
  bangla_title?: string | undefined; // fallback: "শিরোনাম নেই"
  published_at?: string | undefined; // fallback: "Unknown Date"
  summary?: string | undefined; // fallback: ""
  name?: string | undefined; // fallback: ""
  bangla_summary?: string | undefined; // fallback: ""
  slug?: string | undefined; // fallback: "0"
  subCategory_name?: string | undefined; // fallback: "other"
  author?: string | undefined; // fallback: "Unknown Author"
  category_bangla_name?: string | undefined; // fallback: "অন্যান্য"
  subCategory_bangla_name?: string | undefined; // fallback: "অন্যান্য"
  category_name_bangla?: string | undefined; // fallback: "অন্যান্য সংবাদ"
}

export interface EpaperNewsItem {
  id?: number;
  name?: string;
  epaper_date?: string;
  epaper_image?: string;
  page_number?: number;
  status?: number;
}
