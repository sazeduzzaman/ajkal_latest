import { CategoryDataType } from "@/types/CategoryDataType";
import Link from "next/link";
import React from "react";

interface CategoryNewsProps {
  items: CategoryDataType[]; // fetched categories
}

const FooterMenu: React.FC<CategoryNewsProps> = ({ items }) => {
  // Take only first 12 items (4 per column)
  const limitedItems = items.slice(0, 12);

  const col1 = limitedItems.slice(0, 4);
  const col2 = limitedItems.slice(4, 8);
  const col3 = limitedItems.slice(8, 12);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {/* Column 1 */}
      <div>
        <ul className="space-y-2">
          {col1.map((cat) => (
            <li key={cat.id}>
              <Link
                href={`/${cat.name}/${cat.id}`}
                className="text-lg hover:underline"
              >
                {cat.name_bangla}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 2 */}
      <div>
        <ul className="space-y-2">
          {col2.map((cat) => (
            <li key={cat.id}>
              <Link
                href={`/${cat.name}/${cat.id}`}
                className="text-lg hover:underline"
              >
                {cat.name_bangla}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 3 */}
      <div>
        <ul className="space-y-2">
          {col3.map((cat) => (
            <li key={cat.id}>
              <Link
                href={`/${cat.name}/${cat.id}`}
                className="text-lg hover:underline"
              >
                {cat.name_bangla}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 4 → Static */}
      <div>
        <ul className="space-y-2">
          <li>
            <Link href="about" className="text-lg hover:underline">
              আমাদের সম্পর্কে
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-lg hover:underline">
              যোগাযোগ
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="text-lg hover:underline">
              গোপনীয়তা নীতি
            </Link>
          </li>
          <li>
            <Link href="/terms" className="text-lg hover:underline">
              শর্তাবলী
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterMenu;
