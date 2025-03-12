
import AudioPlayer from '@/components/AudioPlayer';
import { motion, AnimatePresence } from "framer-motion";

interface BookPreviewProps {
  isPreviewPlaying: boolean;
  title: string;
  author: string;
  coverImage: string;
}

const BookPreview = ({ isPreviewPlaying, title, author, coverImage }: BookPreviewProps) => {
  return (
    <AnimatePresence>
      {isPreviewPlaying && (
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 shadow-lg"
        >
          <div className="glass-effect">
            <AudioPlayer 
              title={title}
              author={author}
              coverImage={coverImage}
              miniPlayer={true}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookPreview;
