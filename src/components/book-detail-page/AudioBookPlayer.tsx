
import { Headphones } from 'lucide-react';
import AudioPlayer from '@/components/AudioPlayer';
import { useLanguage } from '@/hooks/use-language';

interface ChapterType {
  id: string;
  title: string;
  duration: string;
  isFree: boolean;
}

interface AudioBookPlayerProps {
  activeChapter: ChapterType | null;
  bookTitle: string;
  bookAuthor: string;
  coverImage: string;
}

const AudioBookPlayer = ({ activeChapter, bookTitle, bookAuthor, coverImage }: AudioBookPlayerProps) => {
  const { t } = useLanguage();
  
  if (activeChapter) {
    return (
      <AudioPlayer 
        title={activeChapter.title}
        author={bookAuthor}
        coverImage={coverImage}
      />
    );
  }
  
  return (
    <div className="glass rounded-xl p-8 text-center animate-pulse">
      <Headphones className="w-12 h-12 mx-auto mb-4 text-accent/70" />
      <p className="text-lg font-medium">{t('selectChapter')}</p>
    </div>
  );
};

export default AudioBookPlayer;
