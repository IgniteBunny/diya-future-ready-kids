
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      toast({
        title: "Thank you for subscribing!",
        description: "We'll keep you updated with the latest news and features.",
      });
      setEmail('');
      setName('');
      setPhone('');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="font-baloo font-bold text-4xl md:text-5xl text-gray-800">
                Stay Connected with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> DIYA</span>
              </h2>
              <p className="font-quicksand text-lg text-gray-600 leading-relaxed">
                Get the latest updates on new features, educational content, and success stories. Join our community of forward-thinking parents and educators.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-quicksand font-semibold text-gray-800">Email Us</h3>
                  <p className="font-quicksand text-gray-600">contact@diya-education.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-quicksand font-semibold text-gray-800">Call Us</h3>
                  <p className="font-quicksand text-gray-600">+91 9876543210</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-quicksand font-semibold text-gray-800">Visit Us</h3>
                  <p className="font-quicksand text-gray-600">New Delhi, India</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="shadow-2xl border-0">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="font-baloo font-bold text-2xl text-gray-800 mb-2">Get In Touch</h3>
                <p className="font-quicksand text-gray-600">Subscribe to our newsletter or request a demo</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-quicksand font-medium text-gray-700 block mb-2">Full Name *</label>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="font-quicksand"
                    required
                  />
                </div>

                <div>
                  <label className="font-quicksand font-medium text-gray-700 block mb-2">Email Address *</label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="font-quicksand"
                    required
                  />
                </div>

                <div>
                  <label className="font-quicksand font-medium text-gray-700 block mb-2">Phone Number</label>
                  <Input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    className="font-quicksand"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 font-quicksand font-semibold text-lg py-3"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Subscribe & Get Updates
                </Button>
              </form>

              <div className="text-center mt-6">
                <p className="font-quicksand text-sm text-gray-500">
                  By subscribing, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
