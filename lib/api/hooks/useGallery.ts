import { useQuery } from '@tanstack/react-query';
import apiClient from '../client';
import endpoints from '../endpoints';
import type { GalleryImage, ApiResponse } from '../types';

const isApiEnabled = () => Boolean(process.env.NEXT_PUBLIC_API_URL);

const staticGallery: GalleryImage[] = [
  { id: '1', labelAr: 'سالب ١',        labelEn: 'Minus One',        category: 'productions', colSpan: 2, rowSpan: 1, image: 'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: '2', labelAr: 'كواليس الاحتياج', labelEn: 'The Need Backstage', category: 'backstage',   colSpan: 1, rowSpan: 2, image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: '3', labelAr: 'المسرح المكشوف', labelEn: 'Outdoor Stage',    category: 'outdoor',     colSpan: 1, rowSpan: 1, image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: '4', labelAr: 'عنبر ١٠',        labelEn: 'Ward 10',          category: 'productions', colSpan: 1, rowSpan: 1, image: 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: '5', labelAr: 'خشبة المسرح',    labelEn: 'The Stage',        category: 'backstage',   colSpan: 2, rowSpan: 1, image: 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: '6', labelAr: 'إيكوس',          labelEn: 'Equus',            category: 'productions', colSpan: 1, rowSpan: 1, image: 'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: '7', labelAr: 'ليالي مكشوفة',   labelEn: 'Open Nights',      category: 'outdoor',     colSpan: 1, rowSpan: 1, image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: '8', labelAr: 'تحضيرات',        labelEn: 'Preparations',     category: 'backstage',   colSpan: 2, rowSpan: 1, image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

async function fetchGallery(): Promise<GalleryImage[]> {
  if (!isApiEnabled()) return staticGallery;
  const { data } = await apiClient.get<ApiResponse<GalleryImage[]>>(endpoints.gallery);
  return data.data;
}

export function useGallery() {
  return useQuery({
    queryKey: ['gallery'],
    queryFn: fetchGallery,
    staleTime: 10 * 60 * 1000,
    placeholderData: staticGallery,
  });
}

export { staticGallery };
