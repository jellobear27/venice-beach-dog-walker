import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Booking from '@/components/Booking';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Booking />
      <Testimonials />
      <Footer />
    </div>
  );
}
