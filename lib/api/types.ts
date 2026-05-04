export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}

export type GalleryCategory = 'productions' | 'backstage' | 'outdoor';

export interface GalleryImage {
  id: string;
  labelAr: string;
  labelEn: string;
  image: string;
  colSpan: number;
  rowSpan: number;
  category: GalleryCategory;
}
