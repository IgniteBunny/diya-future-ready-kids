
import { Card, CardContent } from '@/components/ui/card';
import { Play, Star, Users, BookOpen } from 'lucide-react';

const AppShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="font-baloo font-bold text-4xl md:text-5xl text-gray-800">
                Experience Learning
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> Like Never Before</span>
              </h2>
              <p className="font-quicksand text-lg text-gray-600 leading-relaxed">
                Our intuitive app design makes learning engaging and fun. With interactive lessons, real-time progress tracking, and gamified challenges, students stay motivated throughout their learning journey.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-quicksand font-semibold text-gray-800">Interactive Lessons</span>
                </div>
                <p className="font-quicksand text-sm text-gray-600">Engaging content that keeps students interested</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="font-quicksand font-semibold text-gray-800">Progress Tracking</span>
                </div>
                <p className="font-quicksand text-sm text-gray-600">Monitor improvement with detailed analytics</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-orange-600" />
                  </div>
                  <span className="font-quicksand font-semibold text-gray-800">Parent Dashboard</span>
                </div>
                <p className="font-quicksand text-sm text-gray-600">Keep parents informed about progress</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Play className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="font-quicksand font-semibold text-gray-800">Video Lessons</span>
                </div>
                <p className="font-quicksand text-sm text-gray-600">High-quality video content from experts</p>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Phone Mockup */}
            <div className="relative mx-auto w-72 h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-[3rem] p-2">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden shadow-2xl">
                  {/* Phone Screen Content */}
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-24 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="font-baloo font-bold text-white text-lg">DIYA Learning</h3>
                      <p className="font-quicksand text-blue-100 text-sm">Class 5 Mathematics</p>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <Card className="border-0 shadow-md">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-quicksand font-semibold text-gray-800">Today's Quiz</h4>
                            <p className="font-quicksand text-sm text-gray-600">Complete 5 questions</p>
                          </div>
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-green-600 text-xl">✓</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-md">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-quicksand font-semibold text-gray-800">Progress Report</h4>
                            <p className="font-quicksand text-sm text-gray-600">85% completed</p>
                          </div>
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 text-lg">📊</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-md">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-quicksand font-semibold text-gray-800">Achievements</h4>
                            <p className="font-quicksand text-sm text-gray-600">3 new badges earned!</p>
                          </div>
                          <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                            <span className="text-yellow-600 text-lg">🏆</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-8 w-16 h-16 bg-accent rounded-full flex items-center justify-center animate-bounce-gentle">
              <span className="text-2xl">🎯</span>
            </div>
            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center animate-bounce-gentle" style={{animationDelay: '1s'}}>
              <span className="text-3xl">📱</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
