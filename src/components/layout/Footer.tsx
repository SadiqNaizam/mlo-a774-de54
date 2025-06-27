import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Store } from 'lucide-react';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  const LinkItem = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <li>
        <Link to={to} className="text-sm text-gray-600 dark:text-gray-400 hover:underline">
            {children}
        </Link>
    </li>
  );

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Get to Know Us */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Get to Know Us</h3>
            <ul className="space-y-2">
              <LinkItem to="#">About Us</LinkItem>
              <LinkItem to="#">Careers</LinkItem>
              <LinkItem to="#">Press Releases</LinkItem>
              <LinkItem to="#">Amazon Science</LinkItem>
            </ul>
          </div>

          {/* Column 2: Make Money with Us */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Make Money with Us</h3>
            <ul className="space-y-2">
              <LinkItem to="#">Sell products</LinkItem>
              <LinkItem to="#">Sell on Amazon Business</LinkItem>
              <LinkItem to="#">Become an Affiliate</LinkItem>
              <LinkItem to="#">Advertise Your Products</LinkItem>
            </ul>
          </div>

          {/* Column 3: Let Us Help You */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Let Us Help You</h3>
            <ul className="space-y-2">
              <LinkItem to="/user-profile">Your Account</LinkItem>
              <LinkItem to="/user-profile">Your Orders</LinkItem>
              <LinkItem to="#">Shipping Rates & Policies</LinkItem>
              <LinkItem to="#">Returns & Replacements</LinkItem>
            </ul>
          </div>
          
          {/* Column 4: Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Connect with Us</h3>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-600 dark:text-gray-400 hover:text-primary"><Facebook /></Link>
              <Link to="#" className="text-gray-600 dark:text-gray-400 hover:text-primary"><Twitter /></Link>
              <Link to="#" className="text-gray-600 dark:text-gray-400 hover:text-primary"><Instagram /></Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2">
                <Link to="/" className="flex items-center gap-2">
                    <Store className="h-6 w-6 text-primary" />
                    <span className="font-bold text-lg text-gray-700 dark:text-gray-300">Amazon Clone</span>
                </Link>
            </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 md:mt-0">
            &copy; {currentYear} Amazon Clone, Inc. or its affiliates
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;