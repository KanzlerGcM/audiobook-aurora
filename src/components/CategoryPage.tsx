
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import BookList from "@/components/BookList";
import { getBooksByCategory } from "@/data/books";
import { useState } from "react";
import { Book } from "@/types/book";

interface CategoryPageProps {
  category: string;
}

const CategoryPage = ({ category }: CategoryPageProps) => {
  const { t } = useLanguage();
  const categoryBooks = getBooksByCategory(category);
  const [selectedBook, setSelectedBook] = useState<Book>(categoryBooks[0] || null);

  const handleSelectBook = (book: Book) => {
    setSelectedBook(book);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-32">
        <h1 className="text-3xl font-semibold text-hakim-light mb-8">
          {category}
        </h1>
        {categoryBooks.length > 0 ? (
          <BookList 
            books={categoryBooks}
            selectedBook={selectedBook}
            onSelectBook={handleSelectBook}
          />
        ) : (
          <p className="text-hakim-light">No books found in this category.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CategoryPage;
