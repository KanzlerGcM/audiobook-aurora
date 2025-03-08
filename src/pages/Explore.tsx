
import { useState } from 'react';
import ExploreTabs from "@/components/explore/ExploreTabs";
import BookContentSection from "@/components/explore/BookContentSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/context/LanguageContext";
import { audiobooks, newReleases, trending } from "@/data/books";

const Explore = () => {
  const [activeTab, setActiveTab] = useState("audiobooks");
  const { t } = useLanguage();
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 md:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{t('explore')}</h1>
          <p className="text-foreground/70">{t('popularAudiobooks')}</p>
        </div>
        
        <ExploreTabs activeTab={activeTab} onTabChange={handleTabChange} />
        
        {activeTab === "audiobooks" && (
          <BookContentSection books={audiobooks} />
        )}

        {activeTab === "new-releases" && (
          <BookContentSection books={newReleases} />
        )}
          
        {activeTab === "trending" && (
          <BookContentSection books={trending} />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Explore;
