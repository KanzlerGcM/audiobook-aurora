
import { Mail, Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import Logo from './Logo';
import { useState } from 'react';
import AboutDialog from './dialogs/AboutDialog';
import ContactDialog from './dialogs/ContactDialog';
import BlogDialog from './dialogs/BlogDialog';
import CareersDialog from './dialogs/CareersDialog';
import FaqDialog from './dialogs/FaqDialog';
import TermsDialog from './dialogs/TermsDialog';
import PrivacyDialog from './dialogs/PrivacyDialog';
import SupportDialog from './dialogs/SupportDialog';
import ExploreDialog from './dialogs/ExploreDialog';
import HelpDialog from './dialogs/HelpDialog';

const Footer = () => {
  const { t } = useLanguage();
  const [dialogOpen, setDialogOpen] = useState({
    about: false,
    contact: false,
    blog: false,
    careers: false,
    faq: false,
    terms: false,
    privacy: false,
    support: false,
    explore: false,
    help: false
  });
  
  const openDialog = (dialog: keyof typeof dialogOpen) => {
    setDialogOpen({ ...dialogOpen, [dialog]: true });
  };
  
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
            <h3 className="font-medium text-lg mb-4 text-white">{t('explore')}</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => openDialog('explore')}
                  className="text-hakim-gray hover:text-hakim-light transition-colors text-left"
                >
                  {t('categories')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => openDialog('explore')}
                  className="text-hakim-gray hover:text-hakim-light transition-colors text-left"
                >
                  {t('trendingNow')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => openDialog('explore')}
                  className="text-hakim-gray hover:text-hakim-light transition-colors text-left"
                >
                  {t('newReleases')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => openDialog('explore')}
                  className="text-hakim-gray hover:text-hakim-light transition-colors text-left"
                >
                  Bestsellers
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => openDialog('about')} 
                  className="text-hakim-gray hover:text-hakim-light transition-colors text-left"
                >
                  {t('aboutUs')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openDialog('contact')} 
                  className="text-hakim-gray hover:text-hakim-light transition-colors text-left"
                >
                  {t('contact')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openDialog('blog')} 
                  className="text-hakim-gray hover:text-hakim-light transition-colors text-left"
                >
                  {t('blog')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openDialog('careers')}
                  className="text-hakim-gray hover:text-hakim-light transition-colors text-left"
                >
                  {t('careers')}
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4 text-white">Help</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => openDialog('faq')}
                  className="text-hakim-gray hover:text-hakim-light transition-colors text-left"
                >
                  {t('faq')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openDialog('terms')}
                  className="text-hakim-gray hover:text-hakim-light transition-colors text-left"
                >
                  {t('termsOfService')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openDialog('privacy')}
                  className="text-hakim-gray hover:text-hakim-light transition-colors text-left"
                >
                  {t('privacyPolicy')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openDialog('support')}
                  className="text-hakim-gray hover:text-hakim-light transition-colors text-left"
                >
                  {t('support')}
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-hakim-medium/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-hakim-gray text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Hakim. {t('allRightsReserved')}.
          </p>
          
          <div className="flex items-center">
            <a href="mailto:info@hakim-audiobooks.com" className="text-sm text-hakim-gray hover:text-hakim-light flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              info@hakim-audiobooks.com
            </a>
          </div>
        </div>
      </div>
      
      {/* Dialog components */}
      <AboutDialog 
        open={dialogOpen.about} 
        onOpenChange={(open) => setDialogOpen(prev => ({ ...prev, about: open }))} 
      />
      <ContactDialog 
        open={dialogOpen.contact} 
        onOpenChange={(open) => setDialogOpen(prev => ({ ...prev, contact: open }))} 
      />
      <BlogDialog 
        open={dialogOpen.blog} 
        onOpenChange={(open) => setDialogOpen(prev => ({ ...prev, blog: open }))} 
      />
      <CareersDialog
        open={dialogOpen.careers}
        onOpenChange={(open) => setDialogOpen(prev => ({ ...prev, careers: open }))}
      />
      <FaqDialog
        open={dialogOpen.faq}
        onOpenChange={(open) => setDialogOpen(prev => ({ ...prev, faq: open }))}
      />
      <TermsDialog
        open={dialogOpen.terms}
        onOpenChange={(open) => setDialogOpen(prev => ({ ...prev, terms: open }))}
      />
      <PrivacyDialog
        open={dialogOpen.privacy}
        onOpenChange={(open) => setDialogOpen(prev => ({ ...prev, privacy: open }))}
      />
      <SupportDialog
        open={dialogOpen.support}
        onOpenChange={(open) => setDialogOpen(prev => ({ ...prev, support: open }))}
      />
      <ExploreDialog
        open={dialogOpen.explore}
        onOpenChange={(open) => setDialogOpen(prev => ({ ...prev, explore: open }))}
      />
      <HelpDialog
        open={dialogOpen.help}
        onOpenChange={(open) => setDialogOpen(prev => ({ ...prev, help: open }))}
      />
    </footer>
  );
};

export default Footer;
