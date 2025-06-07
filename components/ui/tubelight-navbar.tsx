import React from 'react';
import { motion } from 'framer-motion';

interface NavItem {
  name: string;
  url: string;
  icon: React.ComponentType<any>;
}

interface NavBarProps {
  items: NavItem[];
}

export const NavBar: React.FC<NavBarProps> = ({ items }) => {
  const handleItemClick = (url: string) => {
    if (url.startsWith('http')) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else if (url.startsWith('#')) {
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Filter items for mobile (only Work and Share your Idea)
  const mobileItems = items.filter(item => 
    item.name === 'Work' || item.name === 'Share your Idea'
  );

  return (
    <>
      {/* Mobile Navigation - Only Work and Share your Idea */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 block md:hidden">
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-2 bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-4 py-2"
          >
            {mobileItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleItemClick(item.url)}
                className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  item.name === 'Share your Idea'
                    ? 'bg-[#B6FF40] text-black hover:bg-[#a3e636]'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name === 'Connect on X' ? (
                  <svg 
                    className="w-4 h-4" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                ) : (
                  <item.icon className="w-4 h-4" />
                )}
                <span className="hidden sm:inline">{item.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Desktop Navigation - All items */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 hidden md:block">
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-2 bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-4 py-2"
          >
            {items.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleItemClick(item.url)}
                className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  item.name === 'Share your Idea'
                    ? 'bg-[#B6FF40] text-black hover:bg-[#a3e636]'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name === 'Connect on X' ? (
                  <svg 
                    className="w-4 h-4" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                ) : (
                  <item.icon className="w-4 h-4" />
                )}
                <span className="hidden sm:inline">{item.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};