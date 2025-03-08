
import { Star, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

interface Review {
  user: string;
  rating: number;
  date: string;
  text: string;
}

interface BookReviewsProps {
  totalReviews: number;
  rating: number;
  reviews: Review[];
}

const BookReviews = ({ totalReviews, rating, reviews }: BookReviewsProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-medium text-xl">{totalReviews} {t('reviews')}</h3>
          <div className="flex items-center mt-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <span className="ml-2 font-medium">{rating} {t('outOf5')}</span>
          </div>
        </div>
        <Button>{t('writeReview')}</Button>
      </div>
      
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="border-b border-foreground/10 pb-6">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mr-3">
                <User className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-medium">{review.user}</h4>
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-xs text-foreground/70 ml-2">{review.date}</span>
                </div>
              </div>
            </div>
            <p className="text-foreground/80">{review.text}</p>
          </div>
        ))}
        
        <Button variant="outline" className="w-full">{t('loadMoreReviews')}</Button>
      </div>
    </div>
  );
};

export default BookReviews;
