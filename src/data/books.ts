
import { Book } from "@/types/book";
import { generateRandomBooks } from "@/utils/bookGenerator";

// Generate 100 random books
const allBooks = generateRandomBooks(100);

// Export the full list
export const audiobooks: Book[] = allBooks;

// Filter books for different sections
export const newReleases: Book[] = allBooks.slice(0, 10);
export const trending: Book[] = allBooks.slice(10, 20);
export const bestsellers: Book[] = allBooks.slice(20, 30);

// Export books by category
export const getBooksByCategory = (category: string) => {
  return allBooks.filter(book => book.category === category);
};
