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
