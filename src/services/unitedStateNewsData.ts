// services/category.ts
import { fetcher } from "@/lib/fetcher";
import { ApiResponse, CategoryDataType } from "@/types/CategoryDataType";

export async function getUnitedNewsData(): Promise<CategoryDataType[]> {
  const res = await fetcher<ApiResponse<CategoryDataType[]>>(
    "https://backoffice.ajkal.us/category-news/2",
    { revalidate: 1 } // update every minute
  );

  return res.data; // Only return the array of categories
}
