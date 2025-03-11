
import { Star, Clock, Calendar, BookOpenText } from 'lucide-react';

interface BookTagsProps {
  rating: number;
  duration: string;
  category?: string;
  releaseDate?: string;
}

const BookTags = ({ rating, duration, category, releaseDate }: BookTagsProps) => {
  return (
    <div className="flex flex-wrap gap-4 my-4">
      <div className="flex items-center space-x-1 bg-hakim-medium/10 px-3 py-1.5 rounded-full">
        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
        <span className="text-sm">{rating}</span>
      </div>
      
      <div className="flex items-center space-x-1 bg-hakim-medium/10 px-3 py-1.5 rounded-full">
        <Clock className="w-4 h-4 text-hakim-light" />
        <span className="text-sm">{duration}</span>
      </div>
      
      {category && (
        <div className="flex items-center space-x-1 bg-hakim-medium/10 px-3 py-1.5 rounded-full">
          <BookOpenText className="w-4 h-4 text-hakim-light" />
          <span className="text-sm">{category}</span>
        </div>
      )}
      
      {releaseDate && (
        <div className="flex items-center space-x-1 bg-hakim-medium/10 px-3 py-1.5 rounded-full">
          <Calendar className="w-4 h-4 text-hakim-light" />
          <span className="text-sm">{releaseDate}</span>
        </div>
      )}
    </div>
  );
};

export default BookTags;
