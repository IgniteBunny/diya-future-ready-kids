
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Parent of 7th Grade Student',
      image: '👩‍💼',
      content: 'DIYA has transformed my daughter\'s approach to learning. The bilingual support helps her understand concepts better, and the progress reports keep me informed about her improvement.',
      rating: 5,
      highlight: 'Academic Performance Improved by 40%'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Mathematics Teacher',
      image: '👨‍🏫',
      content: 'As an educator, I\'m impressed by DIYA\'s adaptive learning technology. It identifies each student\'s weak areas and provides targeted practice. My students are more engaged than ever.',
      rating: 5,
      highlight: 'Used by 500+ Teachers'
    },
    {
      name: 'Sunita Patel',
      role: 'School Principal',
      image: '👩‍💼',
      content: 'We implemented DIYA across our school and saw remarkable results. The anti-cheat technology ensures fair assessments, and the detailed analytics help us track student progress effectively.',
      rating: 5,
      highlight: 'Adopted by 50+ Schools'
    },
    {
      name: 'Dr. Amit Verma',
      role: 'Education Consultant',
      image: '👨‍⚕️',
      content: 'DIYA\'s approach to early competitive exam preparation is commendable. It builds a strong foundation without overwhelming young minds. The gamified learning keeps students motivated.',
      rating: 5,
      highlight: 'Recommended by Experts'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-baloo font-bold text-4xl md:text-5xl text-gray-800 mb-6">
            What Our Community
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> Says</span>
          </h2>
          <p className="font-quicksand text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied parents, teachers, and students who have experienced the DIYA difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4 text-3xl">
                    {testimonial.image}
                  </div>
                  <h3 className="font-baloo font-bold text-lg text-gray-800">{testimonial.name}</h3>
                  <p className="font-quicksand text-sm text-gray-600">{testimonial.role}</p>
                </div>

                <div className="flex justify-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                  <p className="font-quicksand text-gray-600 leading-relaxed italic pl-6">
                    {testimonial.content}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-3 text-center">
                  <span className="font-quicksand font-semibold text-sm text-gray-800">
                    {testimonial.highlight}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="font-baloo font-bold text-3xl mb-4">
              Join Our Success Stories
            </h3>
            <p className="font-quicksand text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Be part of a community that's shaping the future of education. Start your child's journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary hover:bg-gray-100 font-quicksand font-semibold px-8 py-4 rounded-full transition-all hover:shadow-lg">
                Download App Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary font-quicksand font-semibold px-8 py-4 rounded-full transition-all">
                Request School Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
