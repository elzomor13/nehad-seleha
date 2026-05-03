export type EventCategory = 'summer' | 'outdoor' | 'workshop';

export interface TheatreEvent {
  id: string;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  dateAr: string;
  dateEn: string;
  category: EventCategory;
  descriptionAr: string;
  descriptionEn: string;
  image: string;
}

export const events: TheatreEvent[] = [
  {
    id: '1',
    titleAr: 'مهرجان المسرح الصيفي',
    titleEn: 'Summer Theatre Festival',
    categoryAr: 'الأنشطة الصيفية',
    categoryEn: 'Summer Activities',
    dateAr: 'يونيو — أغسطس ٢٠٢٦',
    dateEn: 'June — August 2026',
    category: 'summer',
    descriptionAr:
      'مهرجان مسرحي صيفي يضم عروضاً متنوعة في الهواء الطلق لجميع الأعمار.',
    descriptionEn:
      'A summer theatre festival featuring diverse outdoor performances for all ages.',
    image:
      'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '2',
    titleAr: 'ليالي المسرح المكشوف',
    titleEn: 'Open Stage Nights',
    categoryAr: 'Outdoor Stage',
    categoryEn: 'Outdoor Stage',
    dateAr: 'كل جمعة — مايو ٢٠٢٦',
    dateEn: 'Every Friday — May 2026',
    category: 'outdoor',
    descriptionAr:
      'أمسيات مسرحية تحت النجوم على الخشبة المكشوفة بشارع اليابان.',
    descriptionEn:
      'Theatre evenings under the stars on the outdoor stage on Japan Street.',
    image:
      'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '3',
    titleAr: 'ورشة الإخراج المسرحي',
    titleEn: 'Theatre Direction Workshop',
    categoryAr: 'ورش العمل',
    categoryEn: 'Workshops',
    dateAr: '١٠ — ١٤ مايو ٢٠٢٦',
    dateEn: '10 — 14 May 2026',
    category: 'workshop',
    descriptionAr:
      'ورشة مكثفة في الإخراج المسرحي بإشراف مخرجين من أكاديمية الفنون.',
    descriptionEn:
      'An intensive workshop in theatre direction supervised by directors from the Academy of Arts.',
    image:
      'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '4',
    titleAr: 'أنشطة مسرح الطفل',
    titleEn: "Children's Theatre Activities",
    categoryAr: 'الأنشطة الصيفية',
    categoryEn: 'Summer Activities',
    dateAr: 'يوليو ٢٠٢٦',
    dateEn: 'July 2026',
    category: 'summer',
    descriptionAr:
      'برنامج خاص بالأطفال يشمل عروضاً وورشاً مسرحية إبداعية.',
    descriptionEn:
      'A special programme for children including performances and creative theatre workshops.',
    image:
      'https://images.pexels.com/photos/1537638/pexels-photo-1537638.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '5',
    titleAr: 'ورشة التمثيل والحركة',
    titleEn: 'Acting & Movement Workshop',
    categoryAr: 'ورش العمل',
    categoryEn: 'Workshops',
    dateAr: '٢٤ — ٢٨ مايو ٢٠٢٦',
    dateEn: '24 — 28 May 2026',
    category: 'workshop',
    descriptionAr:
      'ورشة متخصصة في أساسيات التمثيل ولغة الجسد على خشبة المسرح.',
    descriptionEn:
      'A specialised workshop in acting fundamentals and stage body language.',
    image:
      'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '6',
    titleAr: 'أمسية شعرية مكشوفة',
    titleEn: 'Open-Air Poetry Evening',
    categoryAr: 'Outdoor Stage',
    categoryEn: 'Outdoor Stage',
    dateAr: '٣٠ مايو ٢٠٢٦',
    dateEn: '30 May 2026',
    category: 'outdoor',
    descriptionAr: 'أمسية شعرية بالفصحى والعامية على المسرح المكشوف.',
    descriptionEn:
      'A poetry evening in classical and colloquial Arabic on the open stage.',
    image:
      'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];
