
import { HeadphonesIcon, BarChart, Sparkles } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { useIsMobile } from "@/hooks/use-mobile";

interface ExploreTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const ExploreTabs = ({ activeTab, onTabChange }: ExploreTabsProps) => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="mb-6 space-y-2">
        <Button 
          variant={activeTab === "audiobooks" ? "default" : "outline"}
          onClick={() => onTabChange("audiobooks")}
          className="w-full justify-start"
        >
          <HeadphonesIcon className="h-4 w-4 mr-2" />
          {t('audiobooks')}
        </Button>
        <Button 
          variant={activeTab === "new-releases" ? "default" : "outline"}
          onClick={() => onTabChange("new-releases")}
          className="w-full justify-start"
        >
          <Sparkles className="h-4 w-4 mr-2" />
          {t('newReleases')}
        </Button>
        <Button 
          variant={activeTab === "trending" ? "default" : "outline"}
          onClick={() => onTabChange("trending")}
          className="w-full justify-start"
        >
          <BarChart className="h-4 w-4 mr-2" />
          {t('trendingNow')}
        </Button>
      </div>
    );
  }

  return (
    <Tabs defaultValue={activeTab} onValueChange={onTabChange} className="w-full">
      <TabsList className="mb-8 w-full justify-start bg-hakim-dark/20 p-1">
        <TabsTrigger value="audiobooks" className="flex items-center gap-2">
          <HeadphonesIcon className="h-4 w-4" />
          <span>{t('audiobooks')}</span>
        </TabsTrigger>
        <TabsTrigger value="new-releases" className="flex items-center gap-2">
          <Sparkles className="h-4 w-4" />
          <span>{t('newReleases')}</span>
        </TabsTrigger>
        <TabsTrigger value="trending" className="flex items-center gap-2">
          <BarChart className="h-4 w-4" />
          <span>{t('trendingNow')}</span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default ExploreTabs;
