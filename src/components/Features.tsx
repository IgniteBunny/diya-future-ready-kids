
import { Brain, Globe, Shield, BarChart3, Clock, Users, Award, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'Adaptive Learning',
      description: 'AI-powered system that adapts to each student\'s learning pace and style for personalized education.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Bilingual Support',
      description: 'Learn in Hindi and English to ensure every student can understand concepts in their preferred language.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Anti-Cheat Technology',
      description: 'Advanced proctoring and security measures to ensure fair assessment and genuine learning progress.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Smart Reports',
      description: 'Detailed analytics and progress reports to help parents and teachers track student performance.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Clock,
      title: 'Flexible Timing',
      description: 'Study anytime, anywhere with our mobile-first platform designed for busy student schedules.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Learn from experienced teachers who specialize in competitive exam preparation.',
      color: 'from-teal-500 to-blue-500'
    },
    {
      icon: Award,
      title: 'Gamified Learning',
      description: 'Earn badges, points, and rewards to make learning fun and engaging for young students.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Zap,
      title: 'Quick Assessment',
      description: 'Regular quizzes and tests to identify strengths and areas for improvement instantly.',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-baloo font-bold text-4xl md:text-5xl text-gray-800 mb-6">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">DIYA</span>?
          </h2>
          <p className="font-quicksand text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform is designed specifically for young learners, combining advanced technology with proven educational methods.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-baloo font-bold text-xl text-gray-800">{feature.title}</h3>
                <p className="font-quicksand text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
            <h3 className="font-baloo font-bold text-3xl text-gray-800 mb-4">
              Ready to Start Your Child's Journey?
            </h3>
            <p className="font-quicksand text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already building a strong foundation for their competitive exam success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-white font-quicksand font-semibold px-8 py-4 rounded-full transition-all hover:shadow-lg">
                Start Free Trial
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-quicksand font-semibold px-8 py-4 rounded-full transition-all">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
