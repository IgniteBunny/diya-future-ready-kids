
import { Button } from '@/components/ui/button';
import { Play, Download, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-accent/20 rounded-full px-4 py-2 text-sm font-quicksand font-medium text-gray-700">
                <Star className="w-4 h-4 mr-2 text-yellow-500 fill-current" />
                Trusted by 10,000+ students
              </div>
              <h1 className="font-baloo font-bold text-4xl md:text-6xl text-gray-800 leading-tight">
                Prepare for
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> Competitive Exams </span>
                from Day One
              </h1>
              <p className="font-quicksand text-lg md:text-xl text-gray-600 leading-relaxed">
                DIYA - Digital India's Young Aspirants helps students from 1st to 10th standard build a strong foundation for competitive exams with adaptive learning, bilingual support, and smart progress tracking.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-quicksand font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all">
                <Download className="w-5 h-5 mr-2" />
                Download App
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-quicksand font-semibold text-lg px-8 py-4 rounded-full transition-all"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="font-baloo font-bold text-3xl text-primary">50K+</div>
                <div className="font-quicksand text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="font-baloo font-bold text-3xl text-secondary">1000+</div>
                <div className="font-quicksand text-sm text-gray-600">Schools</div>
              </div>
              <div className="text-center">
                <div className="font-baloo font-bold text-3xl text-accent">95%</div>
                <div className="font-quicksand text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto animate-bounce-gentle">
                      <span className="text-white font-baloo font-bold text-3xl">📚</span>
                    </div>
                    <h3 className="font-baloo font-bold text-xl text-gray-800">Interactive Learning</h3>
                    <p className="font-quicksand text-gray-600">Engaging content for young minds</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center animate-bounce-gentle">
              <span className="text-2xl">🎯</span>
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center animate-bounce-gentle" style={{animationDelay: '1s'}}>
              <span className="text-3xl">⭐</span>
            </div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center animate-bounce-gentle" style={{animationDelay: '0.5s'}}>
              <span className="text-xl">🚀</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
