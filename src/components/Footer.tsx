
import { Mail, Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-hakim-dark pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <Logo size="md" />
            </div>
            <p className="text-hakim-gray mb-6 max-w-md">
              Immerse yourself in stories with Hakim, where every audiobook brings a new world to your ears.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-hakim-medium/30 flex items-center justify-center text-hakim-gray hover:bg-hakim-medium hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-hakim-medium/30 flex items-center justify-center text-hakim-gray hover:bg-hakim-medium hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-hakim-medium/30 flex items-center justify-center text-hakim-gray hover:bg-hakim-medium hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4 text-white">Discover</h3>
            <ul className="space-y-3">
              <li><Link to="/categories" className="text-hakim-gray hover:text-hakim-light transition-colors">Categories</Link></li>
              <li><Link to="/trending" className="text-hakim-gray hover:text-hakim-light transition-colors">Trending</Link></li>
              <li><Link to="/new-releases" className="text-hakim-gray hover:text-hakim-light transition-colors">New Releases</Link></li>
              <li><Link to="/bestsellers" className="text-hakim-gray hover:text-hakim-light transition-colors">Bestsellers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-hakim-gray hover:text-hakim-light transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-hakim-gray hover:text-hakim-light transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-hakim-gray hover:text-hakim-light transition-colors">Contact</Link></li>
              <li><Link to="/blog" className="text-hakim-gray hover:text-hakim-light transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4 text-white">Help</h3>
            <ul className="space-y-3">
              <li><Link to="/faq" className="text-hakim-gray hover:text-hakim-light transition-colors">FAQ</Link></li>
              <li><Link to="/terms" className="text-hakim-gray hover:text-hakim-light transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-hakim-gray hover:text-hakim-light transition-colors">Privacy Policy</Link></li>
              <li><Link to="/support" className="text-hakim-gray hover:text-hakim-light transition-colors">Support</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-hakim-medium/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-hakim-gray text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Hakim. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <a href="mailto:info@hakim-audiobooks.com" className="text-sm text-hakim-gray hover:text-hakim-light flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              info@hakim-audiobooks.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
