"use client";

import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import { Old_Standard_TT, Quicksand } from 'next/font/google';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const oldStandardTT = Old_Standard_TT({ subsets: ['latin'], weight: ['400'] });
const quicksand = Quicksand({ subsets: ['latin'], weight: ['400', '500', '600'] });

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    // Clear existing animations
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    gsap.killTweensOf(['.contact-header', '.contact-info', '.contact-form', '.contact-method']);
    
    const animTimeout = setTimeout(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 0.8 }
      });

      tl.from('.contact-header', { 
        opacity: 0, 
        y: 40,
        delay: 0.2 
      })
      .from('.contact-info', { 
        opacity: 0, 
        x: -30,
        stagger: 0.15 
      }, '-=0.5')
      .from('.contact-form', { 
        opacity: 0, 
        x: 30 
      }, '-=0.6')
      .from('.contact-method', { 
        opacity: 0, 
        y: 20,
        stagger: 0.1 
      }, '-=0.4');
    }, 100);

    return () => {
      clearTimeout(animTimeout);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf(['.contact-header', '.contact-info', '.contact-form', '.contact-method']);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col bg-white">
        {/* Hero Section */}
        <section className="px-6 sm:px-16 lg:px-32 py-24 pt-32">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h1 className={`${oldStandardTT.className} contact-header text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight tracking-tight mb-6`}>
              Let&apos;s Create Something Beautiful Together
            </h1>
            <p className={`${quicksand.className} contact-header text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed`}>
              Ready to transform your digital presence? We&aposd love to hear about your project and explore how we can bring your vision to life.
            </p>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="flex-1 px-6 sm:px-16 lg:px-32 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Left Column - Image */}
              <div className="contact-info">
                <div className="relative aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className={`${quicksand.className} text-gray-500 text-lg`}>Contact Us</span>
                  </div>
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="contact-form">
                <div className="bg-gray-50 p-8 lg:p-12 rounded-2xl">
                  <h2 className={`${quicksand.className} text-2xl font-medium text-gray-800 mb-2`}>
                    Start Your Project
                  </h2>
                  <p className={`${quicksand.className} text-gray-600 mb-8`}>
                    Tell us about your vision and we&aposll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className={`${quicksand.className} block text-sm font-medium text-gray-700 mb-2`}>
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className={`${quicksand.className} w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200`}
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className={`${quicksand.className} block text-sm font-medium text-gray-700 mb-2`}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className={`${quicksand.className} w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200`}
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className={`${quicksand.className} block text-sm font-medium text-gray-700 mb-2`}>
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className={`${quicksand.className} w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200`}
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label className={`${quicksand.className} block text-sm font-medium text-gray-700 mb-2`}>
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className={`${quicksand.className} w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 resize-none`}
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className={`${quicksand.className} w-full py-4 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2`}
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </Button>

                    <p className={`${quicksand.className} text-xs text-gray-500 text-center mt-4`}>
                      We typically respond within 24 hours during business days.
                    </p>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}