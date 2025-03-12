
import AudioPlayer from '@/components/AudioPlayer';

interface MiniPlayerProps {
  show: boolean;
  chapterTitle: string;
  bookAuthor: string;
  coverImage: string;
}

const MiniPlayer = ({ show, chapterTitle, bookAuthor, coverImage }: MiniPlayerProps) => {
  if (!show) return null;
  
  return (
    <AudioPlayer 
      title={chapterTitle}
      author={bookAuthor}
      coverImage={coverImage}
      miniPlayer
    />
  );
};

export default MiniPlayer;
