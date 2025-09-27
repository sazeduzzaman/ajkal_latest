"use client";
import { CategoryDataType } from "@/types/CategoryDataType";
import React, { useState, useEffect } from "react";
import ArchiveNews from "./ArchiveNews";
import { getLatestNewsData } from "@/services/latestNewsData";

export default function Archive() {
  const [archiveNews, setArchiveNews] = useState<CategoryDataType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data: CategoryDataType[] = await getLatestNewsData();
      setArchiveNews(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <ArchiveNews items={archiveNews} />
    </div>
  );
}
