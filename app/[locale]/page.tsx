import Navbar from '@/components/theatre/Navbar';
import Hero from '@/components/theatre/Hero';
import ShowsSection from '@/components/theatre/ShowsSection';
import StatsBar from '@/components/theatre/StatsBar';
import GalleryPreview from '@/components/theatre/GalleryPreview';
import AboutPreview from '@/components/theatre/AboutPreview';
import Footer from '@/components/theatre/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-navy-950">
      <Navbar />
      <Hero />
      <ShowsSection />
      <StatsBar />
      <GalleryPreview />
      <AboutPreview />
      <Footer />
    </main>
  );
}
