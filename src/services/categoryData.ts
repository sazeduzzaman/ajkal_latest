// services/category.ts
import { fetcher } from "@/lib/fetcher";
import { ApiResponse, CategoryDataType } from "@/types/CategoryDataType";

export async function getCategories(): Promise<CategoryDataType[]> {
  const res = await fetcher<ApiResponse<CategoryDataType[]>>(
    "https://backoffice.ajkal.us/news-category",
    { revalidate: 60 } // update every minute
  );

  return res.data; // Only return the array of categories
}
