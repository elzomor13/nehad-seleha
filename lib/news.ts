export interface NewsItem {
  slug: string;
  titleAr: string;
  titleEn: string;
  dateAr: string;
  dateEn: string;
  excerptAr: string;
  excerptEn: string;
  bodyAr: string;
  bodyEn: string;
  image: string;
  categoryAr: string;
  categoryEn: string;
}

export const newsItems: NewsItem[] = [
  {
    slug: 'minus-one-premiere',
    titleAr: 'انطلاق عرض "سالب ١" في مسرح د. نهاد صليحة',
    titleEn: '"Minus One" Opens at Nehad Seleiha Theatre',
    dateAr: '٧ مايو ٢٠٢٦',
    dateEn: '7 May 2026',
    categoryAr: 'أخبار العروض',
    categoryEn: 'Show News',
    excerptAr:
      'يفتتح مسرح د. نهاد صليحة موسمه بعرض "سالب ١" الذي يستكشف أعماق الهوية في المجتمع المعاصر.',
    excerptEn:
      'Nehad Seleiha Theatre opens its season with "Minus One", exploring identity in contemporary society.',
    bodyAr:
      'أقام مسرح د. نهاد صليحة عرضه الافتتاحي لموسم ٢٠٢٦ بمسرحية "سالب ١" من إخراج عبد الله صابر. العمل الذي كتبه شباب من خريجي معهد الفنون المسرحية يطرح تساؤلات عميقة حول الانتماء والهوية في زمن الفردية. حضر العرض جمهور كبير من المهتمين بالحركة المسرحية المصرية، وأشاد النقاد بالأداء التمثيلي الرفيع وتصميم الإضاءة الاستثنائي.',
    bodyEn:
      'Nehad Seleiha Theatre held the opening night of its 2026 season with the play "Minus One", directed by Abdullah Saber. The work, written by young graduates of the Institute of Theatrical Arts, raises profound questions about belonging and identity in an age of individualism. A large audience of theatre enthusiasts attended, and critics praised the high calibre of acting and exceptional lighting design.',
    image:
      'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'summer-programme-2026',
    titleAr: 'إعلان برنامج الأنشطة الصيفية ٢٠٢٦',
    titleEn: 'Summer 2026 Activities Programme Announced',
    dateAr: '١ مايو ٢٠٢٦',
    dateEn: '1 May 2026',
    categoryAr: 'أخبار المسرح',
    categoryEn: 'Theatre News',
    excerptAr:
      'يكشف المسرح عن برنامجه الصيفي الذي يتضمن ورشاً وعروضاً مكشوفة وأنشطة لمسرح الطفل.',
    excerptEn:
      'The theatre reveals its summer programme featuring workshops, outdoor performances, and children\'s theatre activities.',
    bodyAr:
      'أعلن مسرح د. نهاد صليحة عن برنامجه الصيفي الشامل لعام ٢٠٢٦، الذي يضم مجموعة متنوعة من الأنشطة تشمل: ورش التمثيل والإخراج للشباب، وليالي المسرح المكشوف كل جمعة، وبرنامجاً خاصاً لمسرح الطفل في يوليو. تهدف هذه الأنشطة إلى تنشيط الحركة المسرحية وتقريب الفن من الجمهور الواسع.',
    bodyEn:
      'Nehad Seleiha Theatre announced its comprehensive summer programme for 2026, featuring a diverse range of activities including acting and directing workshops for youth, open-air theatre nights every Friday, and a special children\'s theatre programme in July. These activities aim to revitalise the theatre movement and bring art closer to the wider public.',
    image:
      'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'equus-production',
    titleAr: 'مسرح نهاد صليحة يقدّم "إيكوس" لبيتر شايفر',
    titleEn: 'NS Theatre Presents Peter Shaffer\'s "Equus"',
    dateAr: '١٥ أبريل ٢٠٢٦',
    dateEn: '15 April 2026',
    categoryAr: 'أخبار العروض',
    categoryEn: 'Show News',
    excerptAr:
      'يستعد المسرح لتقديم العمل الكلاسيكي "إيكوس" في إنتاج جديد يتحدى حدود المسرح التقليدي.',
    excerptEn:
      'The theatre prepares to present the classic work "Equus" in a new production that challenges the boundaries of traditional theatre.',
    bodyAr:
      'يُقدّم مسرح د. نهاد صليحة عرضه المرتقب "إيكوس" للكاتب البريطاني بيتر شايفر، بإخراج أسامة الطوخي. المسرحية التي تُعدّ من كلاسيكيات المسرح العالمي تطرح أسئلة عميقة حول الإيمان والهوية والطب النفسي. يسعى الفريق الفني إلى تقديم قراءة معاصرة للنص مع الحفاظ على روحه الأصيلة.',
    bodyEn:
      'Nehad Seleiha Theatre presents its highly anticipated production of "Equus" by British playwright Peter Shaffer, directed by Osama El-Toukhi. The play, considered one of the classics of world theatre, raises profound questions about faith, identity, and psychiatry. The artistic team seeks to offer a contemporary reading of the text while preserving its original spirit.',
    image:
      'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'theatre-expansion',
    titleAr: 'مشروع توسعة وتطوير مسرح نهاد صليحة',
    titleEn: 'Nehad Seleiha Theatre Expansion Project',
    dateAr: '٢٠ مارس ٢٠٢٦',
    dateEn: '20 March 2026',
    categoryAr: 'أخبار المسرح',
    categoryEn: 'Theatre News',
    excerptAr:
      'تعلن وزارة الثقافة عن مشروع تطوير شامل للمسرح يشمل تحديث التقنيات وتطوير الفراغات الإبداعية.',
    excerptEn:
      'The Ministry of Culture announces a comprehensive theatre development project covering technology upgrades and creative space development.',
    bodyAr:
      'أعلنت وزارة الثقافة المصرية وأكاديمية الفنون عن مشروع تطوير شامل لمسرح د. نهاد صليحة يمتد على مدى ثلاث سنوات. يشمل المشروع تحديث منظومة الإضاءة والصوت، وتطوير قاعة للعروض الصغيرة (بلاك بوكس)، وإنشاء مركز للتدريب المسرحي. يهدف المشروع إلى تعزيز مكانة المسرح كمنصة ثقافية رائدة في مصر والعالم العربي.',
    bodyEn:
      'The Egyptian Ministry of Culture and the Academy of Arts announced a comprehensive three-year development project for Nehad Seleiha Theatre. The project includes upgrading the lighting and sound systems, developing a small performance hall (Black Box), and establishing a theatre training centre. The project aims to strengthen the theatre\'s position as a leading cultural platform in Egypt and the Arab world.',
    image:
      'https://images.pexels.com/photos/1537638/pexels-photo-1537638.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'nehad-seleiha-anniversary',
    titleAr: 'الذكرى الخامسة على رحيل د. نهاد صليحة',
    titleEn: 'Fifth Anniversary of Dr. Nehad Seleiha\'s Passing',
    dateAr: '١٠ فبراير ٢٠٢٦',
    dateEn: '10 February 2026',
    categoryAr: 'تكريم',
    categoryEn: 'Tribute',
    excerptAr:
      'يحيي المسرح ذكرى الناقدة الكبيرة د. نهاد صليحة بندوة فكرية وعرض خاص.',
    excerptEn:
      "The theatre commemorates the great critic Dr. Nehad Seleiha's memory with an intellectual symposium and special performance.",
    bodyAr:
      'أحيا مسرح د. نهاد صليحة الذكرى الخامسة على رحيل الناقدة المسرحية الكبيرة بإقامة ندوة فكرية حضرها نخبة من المثقفين والمسرحيين والأكاديميين. تحدث المشاركون عن إرث نهاد صليحة النقدي وأثره الدائم في مسيرة المسرح العربي. اختُتمت الفعالية بعرض خاص لمختارات من أعمال كتبت تقديراً لمسيرتها الفكرية.',
    bodyEn:
      "Nehad Seleiha Theatre commemorated the fifth anniversary of the great theatre critic's passing with an intellectual symposium attended by a select group of intellectuals, theatre practitioners, and academics. Participants spoke about Nehad Seleiha's critical legacy and its lasting impact on the journey of Arab theatre. The event concluded with a special performance featuring selections from works written in appreciation of her intellectual career.",
    image:
      'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];
