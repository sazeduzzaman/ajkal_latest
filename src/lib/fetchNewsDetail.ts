// src/lib/fetchNewsDetail.ts

export interface NewsDetailItem {
  id: number;
  news_title: string;
  news_detail: string;
  title_img: string;
  category_name_bangla: string;
  news_time: string;
}

interface NewsDetailResponse {
  data: NewsDetailItem;
}

export async function fetchNewsDetail(newsId: string): Promise<NewsDetailItem | null> {
  try {
    const res = await fetch(`https://backoffice.ajkal.us/news-detail/${newsId}`, {
      next: { revalidate: 1 },
    });

    if (!res.ok) return null;
    const json: NewsDetailResponse = await res.json();
    return json.data;
  } catch {
    return null;
  }
}
