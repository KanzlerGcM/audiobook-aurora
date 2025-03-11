
import AudioPlayer from '@/components/AudioPlayer';

interface BookPreviewProps {
  isPreviewPlaying: boolean;
  title: string;
  author: string;
  coverImage: string;
}

const BookPreview = ({ isPreviewPlaying, title, author, coverImage }: BookPreviewProps) => {
  if (!isPreviewPlaying) return null;
  
  return (
    <div className="mt-6">
      <AudioPlayer 
        title={title}
        author={author}
        coverImage={coverImage}
        miniPlayer={true}
      />
    </div>
  );
};

export default BookPreview;
