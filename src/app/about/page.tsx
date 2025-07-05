"use client";

import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import { Old_Standard_TT, Quicksand } from 'next/font/google';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const oldStandardTT = Old_Standard_TT({ subsets: ['latin'], weight: ['400'] });
const quicksand = Quicksand({ subsets: ['latin'], weight: ['400', '500'] });

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useEffect(() => {
    // Clear existing animations
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    gsap.killTweensOf(['.about-header', '.about-text', '.about-image', '.values-header', '.values-subheader', '.value-item']);
    
    const animTimeout = setTimeout(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 0.8 }
      });

      tl.from('.about-header', { 
        opacity: 0, 
        y: 40,
        delay: 0.2 
      })
      .from('.about-text', { 
        opacity: 0, 
        y: 30,
        stagger: 0.15 
      }, '-=0.5')
      .from('.about-image', { 
        opacity: 0, 
        scale: 0.95,
        stagger: 0.2 
      }, '-=0.6');

      // Values Section Scroll Animation
      const valuesSection = document.querySelector('.values-section');
      if (valuesSection) {
        const valuesTl = gsap.timeline({
          scrollTrigger: {
            trigger: valuesSection,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          defaults: { ease: 'power3.out', duration: 0.8 }
        });

        valuesTl.from('.values-header', { opacity: 0, y: 40 })
          .from('.values-subheader', { opacity: 0, y: 30 }, '-=0.6')
          .from('.value-item', { opacity: 0, y: 30, stagger: 0.2 }, '-=0.5');
      }
    }, 100);

    return () => {
      clearTimeout(animTimeout);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf(['.about-header', '.about-text', '.about-image', '.values-header', '.values-subheader', '.value-item']);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col bg-white">
        <section className="flex-1 px-6 sm:px-16 lg:px-32 py-24 pt-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Text */}
              <div className="space-y-8">
                <h1 className={`${oldStandardTT.className} about-header text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight tracking-tight`}>
                  Designing With Passion
                </h1>
                
                <div className="space-y-6">
                  <p className={`${quicksand.className} about-text text-lg sm:text-xl text-gray-600 leading-relaxed`}>
                    At Design Labs, we believe that great design is more than just aesthetics—it&apos;s about creating meaningful connections between brands and their audiences.
                  </p>
                  
                  <p className={`${quicksand.className} about-text text-lg text-gray-600 leading-relaxed`}>
                    Our team of creative professionals combines strategic thinking with artistic vision to deliver web experiences that not only look exceptional but also drive real business results.
                  </p>
                  
                  <p className={`${quicksand.className} about-text text-lg text-gray-600 leading-relaxed`}>
                    We work with forward-thinking companies who understand that in today&apos;s digital landscape, your website is often the first impression you make. Let&apos;s make it unforgettable.
                  </p>
                </div>

                <div className="about-text pt-4">
                  <h3 className={`${quicksand.className} text-xl font-medium text-gray-800 mb-4`}>
                    Our Approach
                  </h3>
                  <ul className={`${quicksand.className} space-y-3 text-gray-600`}>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Strategy-first design thinking
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      User-centered experiences
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Clean, purposeful aesthetics
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Images */}
              <div className="space-y-6">
                <div className="about-image relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className={`${quicksand.className} text-gray-500 text-sm`}>Design Process</span>
                  </div>
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="about-image relative aspect-square bg-gray-100 rounded-lg overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-150 to-gray-250 flex items-center justify-center">
                      <span className={`${quicksand.className} text-gray-500 text-xs text-center`}>Team<br/>Collaboration</span>
                    </div>
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="about-image relative aspect-square bg-gray-100 rounded-lg overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-250 to-gray-200 flex items-center justify-center">
                      <span className={`${quicksand.className} text-gray-500 text-xs text-center`}>Creative<br/>Solutions</span>
                    </div>
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50 values-section">
          <div className="max-w-7xl mx-auto px-6 sm:px-16 lg:px-32">
            <div className="text-center mb-16">
              <h2 className={`${oldStandardTT.className} values-header text-3xl sm:text-4xl text-gray-900 mb-6`}>
                What Drives Us
              </h2>
              <p className={`${quicksand.className} values-subheader text-lg text-gray-600 max-w-2xl mx-auto`}>
                Our core values shape every project we take on and every relationship we build.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center space-y-4 value-item">
                <h3 className={`${quicksand.className} text-xl font-medium text-gray-800`}>
                  Craftsmanship
                </h3>
                <p className={`${quicksand.className} text-gray-600 leading-relaxed`}>
                  Every pixel, every interaction, every line of code is crafted with meticulous attention to detail.
                </p>
              </div>
              
              <div className="text-center space-y-4 value-item">
                <h3 className={`${quicksand.className} text-xl font-medium text-gray-800`}>
                  Innovation
                </h3>
                <p className={`${quicksand.className} text-gray-600 leading-relaxed`}>
                  We stay ahead of the curve, embracing new technologies and design trends that benefit our clients.
                </p>
              </div>
              
              <div className="text-center space-y-4 value-item">
                <h3 className={`${quicksand.className} text-xl font-medium text-gray-800`}>
                  Partnership
                </h3>
                <p className={`${quicksand.className} text-gray-600 leading-relaxed`}>
                  We work as an extension of your team, collaborating closely to achieve your vision.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}