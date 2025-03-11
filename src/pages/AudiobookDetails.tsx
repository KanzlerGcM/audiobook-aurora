
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBookById } from '@/data/books';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookDetails from '@/components/BookDetails';

const AudiobookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const book = id ? getBookById(id) : undefined;
  
  useEffect(() => {
    if (!book) {
      navigate('/explore');
    }
  }, [book, navigate]);

  if (!book) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <BookDetails book={book} />
      </main>
      <Footer />
    </div>
  );
};

export default AudiobookDetails;
