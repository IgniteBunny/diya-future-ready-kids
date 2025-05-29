
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
              <span className="text-white font-baloo font-bold text-lg">D</span>
            </div>
            <h1 className="font-baloo font-bold text-2xl text-gray-800">DIYA</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="font-quicksand text-gray-600 hover:text-primary transition-colors">Features</a>
            <a href="#about" className="font-quicksand text-gray-600 hover:text-primary transition-colors">About</a>
            <a href="#testimonials" className="font-quicksand text-gray-600 hover:text-primary transition-colors">Testimonials</a>
            <a href="#contact" className="font-quicksand text-gray-600 hover:text-primary transition-colors">Contact</a>
            <Button className="bg-primary hover:bg-primary/90 font-quicksand font-semibold">
              Download App
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="font-quicksand text-gray-600">Features</a>
              <a href="#about" className="font-quicksand text-gray-600">About</a>
              <a href="#testimonials" className="font-quicksand text-gray-600">Testimonials</a>
              <a href="#contact" className="font-quicksand text-gray-600">Contact</a>
              <Button className="bg-primary hover:bg-primary/90 font-quicksand font-semibold w-full">
                Download App
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
