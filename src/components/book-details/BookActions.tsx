
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { useAuth } from '@/hooks/use-auth';

interface BookActionsProps {
  bookId: string;
  title: string;
  isLoggedIn: boolean;
}

const BookActions = ({ bookId, title, isLoggedIn }: BookActionsProps) => {
  const [liked, setLiked] = useState<boolean | null>(null);

  const handleLike = () => {
    if (!isLoggedIn) {
      toast.error("Please login to like books");
      return;
    }
    
    if (liked === true) {
      setLiked(null);
      toast.info(`Removed like from "${title}"`);
    } else {
      setLiked(true);
      toast.success(`You liked "${title}"`);
    }
  };

  const handleDislike = () => {
    if (!isLoggedIn) {
      toast.error("Please login to rate books");
      return;
    }
    
    if (liked === false) {
      setLiked(null);
      toast.info(`Removed dislike from "${title}"`);
    } else {
      setLiked(false);
      toast.error(`You disliked "${title}"`);
    }
  };

  return (
    <div className="flex items-center gap-3 my-4">
      <button 
        onClick={handleLike}
        className={`flex items-center space-x-1 px-3 py-1.5 rounded-full transition-colors ${
          liked === true 
            ? 'bg-green-500/20 text-green-500' 
            : 'bg-hakim-medium/10 hover:bg-hakim-medium/20'
        }`}
      >
        <ThumbsUp className={`w-4 h-4 ${liked === true ? 'fill-green-500' : ''}`} />
      </button>
      <button 
        onClick={handleDislike}
        className={`flex items-center space-x-1 px-3 py-1.5 rounded-full transition-colors ${
          liked === false 
            ? 'bg-red-500/20 text-red-500' 
            : 'bg-hakim-medium/10 hover:bg-hakim-medium/20'
        }`}
      >
        <ThumbsDown className={`w-4 h-4 ${liked === false ? 'fill-red-500' : ''}`} />
      </button>
    </div>
  );
};

export default BookActions;
