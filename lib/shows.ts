export interface Show {
  id: string;
  titleAr: string;
  titleEn: string;
  directorAr: string;
  directorEn: string;
  dateAr: string;
  dateEn: string;
  time: string;
  palette: { from: string; to: string };
  ghostNumber: string;
  synopsisAr?: string;
  synopsisEn?: string;
  image?: string;
}

export const shows: Show[] = [
  {
    id: '1',
    titleAr: 'سالب ١',
    titleEn: 'Minus One',
    directorAr: 'عبد الله صابر',
    directorEn: 'Abdullah Saber',
    dateAr: '٧ و٨ مايو',
    dateEn: '7 & 8 May',
    time: '8 PM',
    palette: { from: '#1a0a2e', to: '#2d1060' },
    ghostNumber: '01',
    synopsisAr: 'عرض مسرحي معاصر يستكشف أعماق الهوية والانتماء في مجتمع متحول.',
    synopsisEn: 'A contemporary production exploring identity and belonging in a changing society.',
    image: 'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: '2',
    titleAr: 'الاحتياج',
    titleEn: 'The Need',
    directorAr: 'حسام المصري',
    directorEn: 'Hossam El-Masry',
    dateAr: '٦ مايو',
    dateEn: '6 May',
    time: '8 PM',
    palette: { from: '#0a1a12', to: '#1a3a22' },
    ghostNumber: '02',
    synopsisAr: 'مسرحية تأملية تدور حول العلاقات الإنسانية والحاجة إلى التواصل في عالم رقمي.',
    synopsisEn: 'A reflective play about human relationships and the need for connection in a digital age.',
    image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: '3',
    titleAr: 'عنبر ١٠',
    titleEn: 'Ward 10',
    directorAr: 'يوسف محمد مومو',
    directorEn: 'Youssef Mohamed',
    dateAr: '١٩ و٢٠ مايو',
    dateEn: '19 & 20 May',
    time: '8 PM',
    palette: { from: '#1a1a0a', to: '#3a3a10' },
    ghostNumber: '03',
    synopsisAr: 'رحلة درامية داخل جدران مستشفى تكشف عن أسرار الحياة والموت والأمل.',
    synopsisEn: 'A dramatic journey within hospital walls revealing secrets of life, death, and hope.',
  },
  {
    id: '4',
    titleAr: 'حبسة سفر',
    titleEn: 'Travel Ban',
    directorAr: 'شادي خلف',
    directorEn: 'Shady Khalaf',
    dateAr: '١٤ و١٥ مايو',
    dateEn: '14 & 15 May',
    time: '8 PM',
    palette: { from: '#0a1520', to: '#102040' },
    ghostNumber: '04',
    synopsisAr: 'كوميديا سوداء عن أحلام الشباب وقيود الواقع في مجتمع يبحث عن الحرية.',
    synopsisEn: 'A dark comedy about youth dreams and the constraints of reality in a society seeking freedom.',
    image: 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: '5',
    titleAr: 'إيكوس',
    titleEn: 'Equus',
    directorAr: 'أسامة الطوخي',
    directorEn: 'Osama El-Toukhi',
    dateAr: '٢١ مايو',
    dateEn: '21 May',
    time: '8 PM',
    palette: { from: '#200a0a', to: '#401020' },
    ghostNumber: '05',
    synopsisAr: 'العمل الكلاسيكي لبيتر شايفر — دراما نفسية عن الإيمان والهوية والعنف.',
    synopsisEn: "Peter Shaffer's classic — a psychological drama about faith, identity, and violence.",
    image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: '6',
    titleAr: 'الوالي',
    titleEn: 'The Governor',
    directorAr: 'عمر الحسيني',
    directorEn: 'Omar El-Husseini',
    dateAr: '٢٢ مايو',
    dateEn: '22 May',
    time: '8 PM',
    palette: { from: '#1a100a', to: '#3a2010' },
    ghostNumber: '06',
    synopsisAr: 'ملحمة سياسية تروي صعود الطغيان وانهياره على خشبة المسرح الكلاسيكية.',
    synopsisEn: 'A political epic narrating the rise and fall of tyranny on the classical stage.',
    image: 'https://images.pexels.com/photos/1537638/pexels-photo-1537638.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
];
