import { useQuery } from '@tanstack/react-query';
import apiClient from '../client';
import endpoints from '../endpoints';
import { newsItems as staticNews } from '@/lib/news';
import type { NewsItem } from '@/lib/news';
import type { ApiResponse } from '../types';

const isApiEnabled = () => Boolean(process.env.NEXT_PUBLIC_API_URL);

type NewsCategory = 'SHOW_NEWS' | 'THEATER_NEWS';

interface NewsApiItem {
  id: number;
  news_date: string;
  title_ar: string;
  title_en: string | null;
  news_category: NewsCategory;
  body_ar: string;
  body_en: string | null;
  poster: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

const categoryMap: Record<NewsCategory, { ar: string; en: string }> = {
  SHOW_NEWS:    { ar: 'أخبار العروض',  en: 'Show News' },
  THEATER_NEWS: { ar: 'أخبار المسرح', en: 'Theatre News' },
};

function excerpt(text: string, max = 160): string {
  return text.length <= max ? text : text.slice(0, max).trimEnd() + '…';
}

function mapNewsItem(item: NewsApiItem): NewsItem {
  const cat = categoryMap[item.news_category] ?? { ar: '', en: '' };
  return {
    slug:        String(item.id),
    titleAr:     item.title_ar,
    titleEn:     item.title_en ?? item.title_ar,
    dateAr:      new Date(item.news_date).toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' }),
    dateEn:      new Date(item.news_date).toLocaleDateString('en-GB',  { year: 'numeric', month: 'long', day: 'numeric' }),
    categoryAr:  cat.ar,
    categoryEn:  cat.en,
    excerptAr:   excerpt(item.body_ar),
    excerptEn:   excerpt(item.body_en ?? item.body_ar),
    bodyAr:      item.body_ar,
    bodyEn:      item.body_en ?? item.body_ar,
    image:       item.poster ?? '',
  };
}

async function fetchNews(): Promise<NewsItem[]> {
  if (!isApiEnabled()) return staticNews;
  const { data: res } = await apiClient.get<ApiResponse<NewsApiItem[]>>(endpoints.news);
  return res.data.map(mapNewsItem);
}

async function fetchNewsArticle(slug: string): Promise<NewsItem | undefined> {
  if (!isApiEnabled()) return staticNews.find((n) => n.slug === slug);
  // No detail endpoint — fetch list and find by id
  const { data: res } = await apiClient.get<ApiResponse<NewsApiItem[]>>(endpoints.news);
  const item = res.data.find((n) => String(n.id) === slug);
  return item ? mapNewsItem(item) : undefined;
}

export function useNews() {
  return useQuery({
    queryKey: ['news'],
    queryFn: fetchNews,
    staleTime: 5 * 60 * 1000,
    placeholderData: staticNews,
  });
}

export function useNewsArticle(slug: string) {
  return useQuery({
    queryKey: ['news', slug],
    queryFn: () => fetchNewsArticle(slug),
    staleTime: 5 * 60 * 1000,
  });
}
