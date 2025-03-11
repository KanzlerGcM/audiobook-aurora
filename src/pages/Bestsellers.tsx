
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import BookList from "@/components/BookList";
import { audiobooks } from "@/data/books";
import { Book } from "@/types/book";

const Bestsellers = () => {
  const { t } = useLanguage();
  
  // Filter bestseller books (in a real app, this would come from an API)
  const bestsellerBooks = audiobooks.slice(0, 6);
  
  // Add state to track the selected book
  const [selectedBook, setSelectedBook] = useState<Book>(bestsellerBooks[0]);

  // Handle book selection
  const handleSelectBook = (book: Book) => {
    setSelectedBook(book);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-32">
        <h1 className="text-3xl font-semibold text-hakim-light mb-8">
          {t('bestsellers')}
        </h1>
        <BookList 
          books={bestsellerBooks} 
          selectedBook={selectedBook}
          onSelectBook={handleSelectBook}
        />
      </div>
      <Footer />
    </>
  );
};

export default Bestsellers;
