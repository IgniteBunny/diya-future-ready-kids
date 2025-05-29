
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-baloo font-bold text-lg">D</span>
              </div>
              <h3 className="font-baloo font-bold text-2xl">DIYA</h3>
            </div>
            <p className="font-quicksand text-gray-300 leading-relaxed">
              Digital India's Young Aspirants - Preparing students for competitive exams from 1st to 10th standard with innovative learning solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-baloo font-bold text-xl">Quick Links</h4>
            <nav className="space-y-3">
              <a href="#" className="font-quicksand text-gray-300 hover:text-primary transition-colors block">About Us</a>
              <a href="#features" className="font-quicksand text-gray-300 hover:text-primary transition-colors block">Features</a>
              <a href="#" className="font-quicksand text-gray-300 hover:text-primary transition-colors block">Pricing</a>
              <a href="#testimonials" className="font-quicksand text-gray-300 hover:text-primary transition-colors block">Testimonials</a>
              <a href="#" className="font-quicksand text-gray-300 hover:text-primary transition-colors block">Blog</a>
              <a href="#contact" className="font-quicksand text-gray-300 hover:text-primary transition-colors block">Contact</a>
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="font-baloo font-bold text-xl">Support</h4>
            <nav className="space-y-3">
              <a href="#" className="font-quicksand text-gray-300 hover:text-primary transition-colors block">Help Center</a>
              <a href="#" className="font-quicksand text-gray-300 hover:text-primary transition-colors block">Privacy Policy</a>
              <a href="#" className="font-quicksand text-gray-300 hover:text-primary transition-colors block">Terms of Service</a>
              <a href="#" className="font-quicksand text-gray-300 hover:text-primary transition-colors block">Cookie Policy</a>
              <a href="#" className="font-quicksand text-gray-300 hover:text-primary transition-colors block">Refund Policy</a>
              <a href="#" className="font-quicksand text-gray-300 hover:text-primary transition-colors block">FAQs</a>
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="font-baloo font-bold text-xl">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-quicksand text-gray-300">contact@diya-education.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-quicksand text-gray-300">+91 9876543210</span>
              </div>
            </div>
            <div className="space-y-3">
              <h5 className="font-quicksand font-semibold text-gray-200">Download Our App</h5>
              <div className="space-y-2">
                <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg font-quicksand text-sm transition-colors block w-full text-left">
                  📱 Download for Android
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg font-quicksand text-sm transition-colors block w-full text-left">
                  🍎 Download for iOS
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-quicksand text-gray-400 text-center md:text-left">
              © 2024 DIYA - Digital India's Young Aspirants. All rights reserved.
            </p>
            <p className="font-quicksand text-gray-400 text-center md:text-right">
              Made with ❤️ for the future of education in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
