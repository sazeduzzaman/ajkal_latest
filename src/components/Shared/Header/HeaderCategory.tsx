import Link from "next/link";
import { getCategories } from "@/services/categoryData";
import { CategoryDataType } from "@/types/CategoryDataType";
import ExtraCategory from "./ExtraCategory";

export default async function HeaderCategory() {
  const categories: CategoryDataType[] = await getCategories();

  const mainCategories = categories.slice(0, 10);
  const extraCategories = categories.slice(10);

  return (
    <nav className="bg-site mobile-none shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex space-x-6 justify-center">
          {mainCategories.map((cat) => (
            <li key={cat.id} className="menu-border pe-6 py-3">
              <Link
                href={`/category/${cat.id}`}
                className="text-white hover:text-gray-300"
              >
                {cat.name_bangla}
              </Link>
            </li>
          ))}
          {extraCategories.length > 0 && (
            <ExtraCategory categories={extraCategories} />
          )}
        </ul>
      </div>
    </nav>
  );
}
