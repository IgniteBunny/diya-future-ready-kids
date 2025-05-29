
import { Button } from '@/components/ui/button';
import { Play, CheckCircle, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-600 via-blue-500 to-primary overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center bg-yellow-400/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-quicksand font-medium text-white border border-yellow-400/30">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
              Digital India's Young Aspirants
            </div>
            
            <div className="space-y-6">
              <h1 className="font-baloo font-bold text-5xl md:text-6xl text-white leading-tight">
                Adaptive Learning
                That <span className="text-yellow-400">Grows With</span>
                Every Student
              </h1>
              <p className="font-quicksand text-lg text-blue-100 leading-relaxed">
                Comprehensive competitive exam preparation platform designed for students from 1st to 10th grade with advanced anti-cheat protection and detailed performance analytics.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-quicksand font-semibold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-quicksand font-semibold text-lg px-8 py-4 rounded-lg transition-all"
              >
                Request Demo
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center space-x-3 text-white">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="font-quicksand">100% Free for Schools</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="font-quicksand">Privacy Protected</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
              <div className="space-y-6">
                {/* Engagement Metric */}
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-blue-600">98%</div>
                      <div className="text-gray-600 font-quicksand">Student Engagement</div>
                    </div>
                  </div>
                </div>
                
                {/* Platform Preview */}
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🎓</span>
                  </div>
                  <h3 className="font-baloo font-bold text-lg text-gray-800 mb-2">Interactive Learning Platform</h3>
                </div>
                
                {/* Learning Speed */}
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-green-600">2.5x</div>
                      <div className="text-gray-600 font-quicksand">Learning Speed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
