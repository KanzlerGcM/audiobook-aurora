
import { Bookmark, Share2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { useAuth } from "@/hooks/use-auth";
import { toast } from "sonner";

interface BookCoverActionsProps {
  coverImage: string;
  title: string;
  bookId: string;
  onLibraryUpdate?: () => void;
}

const BookCoverActions = ({ coverImage, title, bookId, onLibraryUpdate }: BookCoverActionsProps) => {
  const { t } = useLanguage();
  const { isLoggedIn, addToLibrary, removeFromLibrary, isInLibrary } = useAuth();
  
  const isBookInLibrary = isLoggedIn && isInLibrary(bookId);
  
  const handleLibraryToggle = () => {
    if (!isLoggedIn) {
      toast.error(t('loginRequired') || "Please login to add books to your library");
      return;
    }
    
    if (isBookInLibrary) {
      removeFromLibrary(bookId);
      toast.success(t('removeFromLibrarySuccess') || "Book removed from library");
    } else {
      addToLibrary(bookId);
      toast.success(t('addToLibrarySuccess') || "Book added to library");
    }
    
    if (onLibraryUpdate) {
      onLibraryUpdate();
    }
  };
  
  return (
    <>
      <div className="relative aspect-[2/3] rounded-2xl overflow-hidden shadow-xl max-w-xs mx-auto">
        <img 
          src={coverImage} 
          alt={title}
          className="w-full h-full object-cover animate-fade-in"
        />
      </div>
      
      <div className="mt-6 space-y-4">
        <Button 
          variant={isBookInLibrary ? "secondary" : "outline"} 
          className="w-full flex items-center justify-center gap-2"
          onClick={handleLibraryToggle}
        >
          <Bookmark className="w-4 h-4" /> 
          {isBookInLibrary ? t('removeFromLibrary') : t('addToLibrary')}
        </Button>
        <Button variant="outline" className="w-full flex items-center justify-center gap-2">
          <Share2 className="w-4 h-4" /> {t('shareBook')}
        </Button>
      </div>
    </>
  );
};

export default BookCoverActions;
