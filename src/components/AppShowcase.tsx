
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const AppShowcase = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-baloo font-bold text-4xl md:text-5xl text-gray-800 mb-6">
            See DIYA EduLearn in Action
          </h2>
          <p className="font-quicksand text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our intuitive interface designed for students, teachers, and parents
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Student Dashboard */}
          <div className="text-center">
            <h3 className="font-baloo font-bold text-2xl text-gray-800 mb-6">Student Dashboard</h3>
            <Card className="border-0 shadow-lg mb-6">
              <CardContent className="p-8">
                <div className="bg-blue-50 rounded-lg h-48 flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-2xl">📱</span>
                  </div>
                </div>
                <p className="font-quicksand text-gray-600">Student Dashboard Preview</p>
              </CardContent>
            </Card>
            
            <div className="space-y-3 text-left">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-quicksand text-gray-700">Personalized learning dashboard</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-quicksand text-gray-700">Progress tracking and achievements</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-quicksand text-gray-700">Interactive lessons and quizzes</span>
              </div>
            </div>
          </div>

          {/* Teacher Interface */}
          <div className="text-center">
            <h3 className="font-baloo font-bold text-2xl text-gray-800 mb-6">Teacher Interface</h3>
            <Card className="border-0 shadow-lg mb-6">
              <CardContent className="p-8">
                <div className="bg-green-50 rounded-lg h-48 flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-2xl">📱</span>
                  </div>
                </div>
                <p className="font-quicksand text-gray-600">Teacher Interface Preview</p>
              </CardContent>
            </Card>
            
            <div className="space-y-3 text-left">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-quicksand text-gray-700">Comprehensive class management</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-quicksand text-gray-700">Assignment creation and grading</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-quicksand text-gray-700">Student analytics and insights</span>
              </div>
            </div>
          </div>

          {/* Mobile Experience */}
          <div className="text-center">
            <h3 className="font-baloo font-bold text-2xl text-gray-800 mb-6">Mobile Experience</h3>
            <Card className="border-0 shadow-lg mb-6">
              <CardContent className="p-8">
                <div className="bg-purple-50 rounded-lg h-48 flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-2xl">📱</span>
                  </div>
                </div>
                <p className="font-quicksand text-gray-600">Mobile Experience Preview</p>
              </CardContent>
            </Card>
            
            <div className="space-y-3 text-left">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-quicksand text-gray-700">Full-featured mobile apps</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-quicksand text-gray-700">Offline learning capabilities</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-quicksand text-gray-700">Cross-device synchronization</span>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Section */}
        <div className="bg-gradient-to-r from-blue-600 to-primary rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="font-baloo font-bold text-3xl mb-4">
            Watch Our Platform Demo
          </h3>
          <p className="font-quicksand text-lg mb-8 max-w-2xl mx-auto opacity-90">
            See how DIYA EduLearn transforms the learning experience in just 3 minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-quicksand font-semibold px-8 py-4 rounded-lg transition-all hover:shadow-lg">
              Watch Demo Video
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-quicksand font-semibold px-8 py-4 rounded-lg transition-all">
              Schedule Live Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
