
import { Book } from "@/types/book";
import { generateRandomBooks } from "@/utils/bookGenerator";

// Generate 100 random books - do this only once
const allBooks = generateRandomBooks(100);

// Create a map to cache books by category for faster lookup
const booksByCategory: Record<string, Book[]> = {};

// Create a map to cache books by ID for faster lookup
const booksById: Record<string, Book> = {};

// Index books by ID on initialization
allBooks.forEach(book => {
  booksById[book.id] = book;
});

// Export the full list with pagination
export const getAudiobooks = (page: number = 1, limit: number = 20): Book[] => {
  const start = (page - 1) * limit;
  const end = start + limit;
  return allBooks.slice(start, end);
};

// Optimized getBooksByCategory with caching and pagination
export const getBooksByCategory = (category: string, page: number = 1, limit: number = 20): Book[] => {
  // Get all books for the category if not cached
  if (!booksByCategory[category]) {
    booksByCategory[category] = allBooks.filter(book => book.category === category);
  }
  
  const start = (page - 1) * limit;
  const end = start + limit;
  return booksByCategory[category].slice(start, end);
};

// Get total count of books
export const getTotalBooks = (): number => allBooks.length;

// Get total count of books in a category
export const getTotalBooksByCategory = (category: string): number => {
  if (!booksByCategory[category]) {
    booksByCategory[category] = allBooks.filter(book => book.category === category);
  }
  return booksByCategory[category].length;
};

// Get a single book by ID
export const getBookById = (id: string): Book | undefined => {
  return booksById[id];
};

// Filter books for different sections with pagination
export const newReleases = allBooks.slice(0, 10);
export const trending = allBooks.slice(10, 20);
export const bestsellers = allBooks.slice(20, 30);
