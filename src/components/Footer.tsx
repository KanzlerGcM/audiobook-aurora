
import { BookAudio, Mail, Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <BookAudio className="h-7 w-7 text-accent" />
              <span className="font-medium text-xl">Aurora</span>
            </Link>
            <p className="text-foreground/70 mb-6 max-w-md">
              Immerse yourself in stories with Aurora, where every audiobook brings a new world to your ears.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/70 hover:bg-accent hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/70 hover:bg-accent hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/70 hover:bg-accent hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Discover</h3>
            <ul className="space-y-3">
              <li><Link to="/categories" className="text-foreground/70 hover:text-accent transition-colors">Categories</Link></li>
              <li><Link to="/trending" className="text-foreground/70 hover:text-accent transition-colors">Trending</Link></li>
              <li><Link to="/new-releases" className="text-foreground/70 hover:text-accent transition-colors">New Releases</Link></li>
              <li><Link to="/bestsellers" className="text-foreground/70 hover:text-accent transition-colors">Bestsellers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-foreground/70 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-foreground/70 hover:text-accent transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-foreground/70 hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="/blog" className="text-foreground/70 hover:text-accent transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Help</h3>
            <ul className="space-y-3">
              <li><Link to="/faq" className="text-foreground/70 hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link to="/terms" className="text-foreground/70 hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-foreground/70 hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/support" className="text-foreground/70 hover:text-accent transition-colors">Support</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Aurora. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <a href="mailto:info@aurora-audiobooks.com" className="text-sm text-foreground/60 hover:text-accent flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              info@aurora-audiobooks.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
