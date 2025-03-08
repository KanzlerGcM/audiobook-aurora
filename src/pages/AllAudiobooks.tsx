
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { audiobooks } from "@/data/books";
import AudiobookCard from "@/components/AudiobookCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/context/LanguageContext";

const AllAudiobooks = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useLanguage();
  
  const filteredBooks = audiobooks.filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 md:px-6 py-8 mt-16">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('allAudiobooks')}</h1>
          
          <div className="relative mb-8 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              className="pl-10"
              placeholder={t('searchByTitleOrAuthor')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {filteredBooks.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">{t('noAudiobooksFound')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {filteredBooks.map((book, index) => (
                <AudiobookCard
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  coverImage={book.coverImage}
                  duration={book.duration}
                  rating={book.rating}
                  category={book.category || ""}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AllAudiobooks;
