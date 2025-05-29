
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import AppShowcase from '@/components/AppShowcase';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-quicksand">
      <Header />
      <Hero />
      <Features />
      <AppShowcase />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
