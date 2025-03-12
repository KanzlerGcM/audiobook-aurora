
import AudioPlayer from '@/components/AudioPlayer';
import { motion, AnimatePresence } from "framer-motion";

interface BookPreviewProps {
  isPreviewPlaying: boolean;
  title: string;
  author: string;
  coverImage: string;
}

interface StoredPreviewData {
  isPlaying: boolean;
  bookId: string;
  title: string;
  author: string;
  coverImage: string;
}

// Check for active preview in localStorage
const getStoredPreview = (): StoredPreviewData | null => {
  const storedPreview = localStorage.getItem('previewPlaying');
  if (storedPreview) {
    return JSON.parse(storedPreview);
  }
  return null;
};

const BookPreview = ({ isPreviewPlaying, title, author, coverImage }: BookPreviewProps) => {
  // If preview props were passed but we're not on the book details page,
  // we still want to display the player using props
  const previewData = isPreviewPlaying 
    ? { title, author, coverImage } 
    : null;
  
  // Check localStorage for global preview state
  const storedPreview = getStoredPreview();
  
  // Always show the preview if there's data in localStorage
  // This ensures the preview persists regardless of login state
  const shouldShowPreview = isPreviewPlaying || (storedPreview !== null);
  const playerTitle = previewData?.title || storedPreview?.title || '';
  const playerAuthor = previewData?.author || storedPreview?.author || '';
  const playerCoverImage = previewData?.coverImage || storedPreview?.coverImage || '';
  
  return (
    <AnimatePresence mode="wait">
      {shouldShowPreview && (
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ 
            duration: 0.4, 
            ease: [0.4, 0.0, 0.2, 1] // Custom easing for smooth motion
          }} 
          className="fixed bottom-0 left-0 right-0 z-50 shadow-2xl"
        >
          <div className="glass-effect border-t border-white/10">
            <AudioPlayer 
              title={playerTitle}
              author={playerAuthor}
              coverImage={playerCoverImage}
              miniPlayer={true}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookPreview;
