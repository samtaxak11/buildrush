import Link from "next/link";
import { CircleIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0B] py-4 border-t border-gray-800">
      <div className="flex items-center text-center text-white text-sm">
        <div className="space-x-2">
          <span>2025 BuildRush. All rights reserved.</span>
        </div>
        <div className="algin-end-center flex-grow flex justify-center space-x-10">
        <span>Terms of Service</span>
        <span>Privacy</span>
        </div>
      </div>
      {/* <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <CircleIcon className="h-6 w-6 text-[#B6FF40]" />
              <span className="font-playfair text-lg font-bold text-white">Simple<span className="text-[#B6FF40]">Suite</span></span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              We craft minimum viable digital products for startups. 
              Save time, capital, & attention.
            </p>
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} SimpleSuite. All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#process" className="text-gray-400 hover:text-[#B6FF40] text-sm transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-[#B6FF40] text-sm transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-[#B6FF40] text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#B6FF40] text-sm transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#B6FF40] text-sm transition-colors">
                  MVP Course
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#B6FF40] text-sm transition-colors">
                  Startup Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#B6FF40] text-sm transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#B6FF40] text-sm transition-colors">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-[#B6FF40] text-sm transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#B6FF40] text-sm transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#B6FF40] text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#B6FF40] text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;