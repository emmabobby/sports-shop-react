import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: "Emmanuel Adebayo",
    role: "Pro Footballer",
    content: "The quality of the boots I bought is unmatched. Delivery to Lekki was super fast!",
    image: "https://images.unsplash.com/photo-1615813967515-e1838c1c5116?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Chidinma Okon",
    role: "Fitness Coach",
    content: "Chayoma Fitness Hub is my go-to for all gym equipment. Their customer service is top-notch.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Tunde Bakare",
    role: "Basketball Enthusiast",
    content: "Finally a store in Lagos that sells authentic basketball gear. Highly recommended!",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "Marathon Runner",
    content: "The running shoes are perfect. Great prices and genuine products.",
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=200&auto=format&fit=crop"
  }
];

export const TestimonialSlider: React.FC = () => {
  return (
    <div className="py-12">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col">
              <Quote className="w-10 h-10 text-primary/10 mb-6" />
              <p className="text-gray-600 mb-6 flex-grow italic">"{testimonial.content}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-primary">{testimonial.name}</h4>
                  <p className="text-xs text-secondary font-medium uppercase tracking-wider">{testimonial.role}</p>
                </div>
                <div className="ml-auto flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
