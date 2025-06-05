import { motion } from "framer-motion";
import Link from "next/link";
import { DivideIcon as LucideIcon } from "lucide-react";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
}

export function NavBar({ items }: NavBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-fit mx-auto">
        <div className="flex items-center justify-center gap-3 bg-white py-2 px-4 rounded-full shadow-lg">
          {items.map((item, index) => (
            <Link
              key={item.url}
              href={item.url}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 hover:bg-gray-100 ${
                index === 1 || index === items.length - 1 || window.innerWidth > 768
                  ? "flex"
                  : "hidden md:flex"
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}