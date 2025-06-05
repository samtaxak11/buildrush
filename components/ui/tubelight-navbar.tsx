import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavItem {
  name: string;
  url: string;
  icon: any;
}

interface NavBarProps {
  items: NavItem[];
}

export function NavBar({ items }: NavBarProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filteredItems = isMobile 
    ? items.filter(item => item.name === "Work" || item.name === "Share your Idea")
    : items;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-fit mx-auto">
        <div className="backdrop-blur-lg bg-black/70 rounded-full p-2 flex items-center gap-1">
          {filteredItems.map((item, index) => (
            <Link
              href={item.url}
              key={item.name}
              className={cn(
                "px-4 py-2 rounded-full text-sm text-white transition-colors relative group",
                activeIndex === index && "text-[#B6FF40]"
              )}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <span className="relative z-10 flex items-center gap-2">
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </span>
              {activeIndex === index && (
                <div className="absolute inset-0 bg-white/10 rounded-full" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}