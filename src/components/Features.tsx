
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Globe, Shield, BarChart3 } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Why Choose DIYA Section */}
        <div className="text-center mb-16">
          <h2 className="font-baloo font-bold text-4xl md:text-5xl text-gray-800 mb-6">
            Why Choose DIYA?
          </h2>
          <p className="font-quicksand text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering measurable value to students and educational institutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Student Benefits */}
          <Card className="border-0 shadow-lg bg-blue-50">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🎓</span>
                </div>
                <h3 className="font-baloo font-bold text-2xl text-blue-600">Student Benefits</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <span className="font-quicksand font-semibold text-blue-600">Instant Performance Insights:</span>
                    <p className="font-quicksand text-gray-700">Detailed analytics help identify strengths and improvement areas immediately</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <span className="font-quicksand font-semibold text-blue-600">Language Comfort:</span>
                    <p className="font-quicksand text-gray-700">Choose between English and Marathi for comfortable learning experience</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <span className="font-quicksand font-semibold text-blue-600">Progress Motivation:</span>
                    <p className="font-quicksand text-gray-700">Track improvement over time and compare with top performers</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Institute Benefits */}
          <Card className="border-0 shadow-lg bg-green-50">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🏫</span>
                </div>
                <h3 className="font-baloo font-bold text-2xl text-green-600">Institute Benefits</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <span className="font-quicksand font-semibold text-green-600">Comprehensive Reports:</span>
                    <p className="font-quicksand text-gray-700">Class-wise and student-wise analytics help teachers focus on areas needing attention</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <span className="font-quicksand font-semibold text-green-600">Easy Content Management:</span>
                    <p className="font-quicksand text-gray-700">Bulk upload capabilities save time and streamline exam preparation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <span className="font-quicksand font-semibold text-green-600">Competitive Rankings:</span>
                    <p className="font-quicksand text-gray-700">Institute performance tracking motivates excellence and attracts more students</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Powerful Features Section */}
        <div className="text-center mb-16">
          <h2 className="font-baloo font-bold text-4xl md:text-5xl text-gray-800 mb-6">
            Powerful Features Built for Modern Learning
          </h2>
          <p className="font-quicksand text-xl text-gray-600 max-w-4xl mx-auto">
            Our comprehensive platform adapts to each student's unique learning style, providing personalized education experiences that drive real results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Adaptive Learning */}
          <Card className="border-l-4 border-l-blue-500 shadow-lg hover:shadow-xl transition-all">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl">⚡</span>
              </div>
              <h3 className="font-baloo font-bold text-xl text-gray-800 mb-3">Adaptive Learning</h3>
              <p className="font-quicksand text-gray-600 mb-4">
                AI-powered algorithms adjust difficulty and pace in real-time based on student performance and learning patterns.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="font-quicksand text-sm text-gray-700">Personalized learning paths</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="font-quicksand text-sm text-gray-700">Real-time difficulty adjustment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="font-quicksand text-sm text-gray-700">Learning style analysis</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bilingual Support */}
          <Card className="border-l-4 border-l-green-500 shadow-lg hover:shadow-xl transition-all">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-baloo font-bold text-xl text-gray-800 mb-3">Bilingual Support</h3>
              <p className="font-quicksand text-gray-600 mb-4">
                Comprehensive multilingual platform supporting seamless transitions between languages for diverse learners.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="font-quicksand text-sm text-gray-700">English & Marathi options</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="font-quicksand text-sm text-gray-700">Cultural context integration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="font-quicksand text-sm text-gray-700">Native language comfort</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Anti-Cheat Protection */}
          <Card className="border-l-4 border-l-orange-500 shadow-lg hover:shadow-xl transition-all">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-baloo font-bold text-xl text-gray-800 mb-3">Anti-Cheat Protection</h3>
              <p className="font-quicksand text-gray-600 mb-4">
                Advanced security measures ensure academic integrity while maintaining a smooth learning experience.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="font-quicksand text-sm text-gray-700">Browser lockdown mode</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="font-quicksand text-sm text-gray-700">Behavioral analytics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="font-quicksand text-sm text-gray-700">Plagiarism detection</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Smart Reports */}
          <Card className="border-l-4 border-l-purple-500 shadow-lg hover:shadow-xl transition-all">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-baloo font-bold text-xl text-gray-800 mb-3">Smart Reports</h3>
              <p className="font-quicksand text-gray-600 mb-4">
                Comprehensive analytics and insights for teachers, parents, and administrators to track progress.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="font-quicksand text-sm text-gray-700">Real-time dashboards</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="font-quicksand text-sm text-gray-700">Predictive analytics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="font-quicksand text-sm text-gray-700">Custom report builder</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
