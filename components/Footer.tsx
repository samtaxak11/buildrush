import Link from "next/link";
import { CircleIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0B] py-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span>2025 BuildRush.</span>
          <span>All rights reserved.</span>
        </div>
        <div className="flex items-center space-x-6">
          <span>Terms of Service</span>
          <span>Privacy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;