
import AudioPlayer from '@/components/AudioPlayer';
import { motion } from "framer-motion";

interface BookPreviewProps {
  isPreviewPlaying: boolean;
  title: string;
  author: string;
  coverImage: string;
}

const BookPreview = ({ isPreviewPlaying, title, author, coverImage }: BookPreviewProps) => {
  if (!isPreviewPlaying) return null;
  
  return (
    <motion.div 
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-6"
    >
      <AudioPlayer 
        title={title}
        author={author}
        coverImage={coverImage}
        miniPlayer={true}
      />
    </motion.div>
  );
};

export default BookPreview;
