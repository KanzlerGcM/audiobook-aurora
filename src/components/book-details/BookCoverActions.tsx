
import { Bookmark, Share2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";

interface BookCoverActionsProps {
  coverImage: string;
  title: string;
}

const BookCoverActions = ({ coverImage, title }: BookCoverActionsProps) => {
  const { t } = useLanguage();
  
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
        <Button variant="outline" className="w-full flex items-center justify-center gap-2">
          <Bookmark className="w-4 h-4" /> {t('addToLibrary')}
        </Button>
        <Button variant="outline" className="w-full flex items-center justify-center gap-2">
          <Share2 className="w-4 h-4" /> {t('shareBook')}
        </Button>
      </div>
    </>
  );
};

export default BookCoverActions;
