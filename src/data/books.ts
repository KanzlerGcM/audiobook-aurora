
import { Book } from "@/types/book";
import { generateRandomBooks } from "@/utils/bookGenerator";

// Generate 100 random books - do this only once
const allBooks = generateRandomBooks(100);

// Create a map to cache books by category for faster lookup
const booksByCategory: Record<string, Book[]> = {};

// Export the full list
export const audiobooks: Book[] = allBooks;

// Filter books for different sections - do this only once
export const newReleases: Book[] = allBooks.slice(0, 10);
export const trending: Book[] = allBooks.slice(10, 20);
export const bestsellers: Book[] = allBooks.slice(20, 30);

// Optimized getBooksByCategory with caching
export const getBooksByCategory = (category: string) => {
  // Return from cache if available
  if (booksByCategory[category]) {
    return booksByCategory[category];
  }
  
  // Filter books and cache the result
  const filteredBooks = allBooks.filter(book => book.category === category);
  booksByCategory[category] = filteredBooks;
  
  return filteredBooks;
};
