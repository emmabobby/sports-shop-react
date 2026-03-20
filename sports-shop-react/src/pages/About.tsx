import React from 'react';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070&auto=format&fit=crop" 
            alt="About Hero" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Our Story</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-200">
            Empowering athletes in Nigeria with world-class sports equipment since 2015.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1552674605-5d28c4e14076?q=80&w=1000&auto=format&fit=crop" 
              alt="Team Meeting" 
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
          <div className="flex-1">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2 mb-6">Passionate About Performance</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Chayoma Fitness Hub was founded with a simple mission: to make high-quality sports gear accessible to everyone in Nigeria. Whether you're a professional athlete representing the country or a weekend warrior staying fit, you deserve the best tools to achieve your goals.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We partner directly with global brands to ensure authenticity and quality. Our team consists of former athletes and sports enthusiasts who understand exactly what you need to succeed.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-secondary">10+</span>
                <span className="text-gray-500">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-secondary">50k+</span>
                <span className="text-gray-500">Happy Customers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">Why Choose Chayoma</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-gray-50 rounded-xl text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Quality First</h3>
              <p className="text-gray-600">We never compromise on quality. Every product is vetted for durability and performance.</p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Community</h3>
              <p className="text-gray-600">We support local sports teams and grassroots initiatives across Lagos.</p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Accessibility</h3>
              <p className="text-gray-600">Making premium sports gear available to everyone through fair pricing and wide distribution.</p>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Innovation</h3>
              <p className="text-gray-600">Always staying ahead of the curve with the latest sports technology and trends.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
