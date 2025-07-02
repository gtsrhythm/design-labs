"use client";

import { Notable } from 'next/font/google';
import { Quicksand } from 'next/font/google';
import { Old_Standard_TT } from 'next/font/google';
import { useEffect } from 'react';
import { ChevronDown, ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';

const notable = Notable({ subsets: ['latin'], weight: ['400'] });
const quicksand = Quicksand({ subsets: ['latin'], weight: ['400'] });
const oldStandardTT = Old_Standard_TT({ subsets: ['latin'], weight: ['400'] });

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    // Clear any existing animations
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    gsap.killTweensOf(['.design', '.labs', '.scroll-indicator']);
    gsap.killTweensOf('.details-section h2, .details-section p, .details-section button');
    
    // Reset elements to their base state
    gsap.set('.design', { clearProps: "all" });
    gsap.set('.labs', { clearProps: "all" });
    gsap.set('.scroll-indicator', { clearProps: "all" });
    
    // Use a short timeout to ensure DOM is ready after navigation
    const animTimeout = setTimeout(() => {
      const heroTl = gsap.timeline({
        defaults: { ease: 'power4.out', duration: 1.2 },
      });

      heroTl
        .from('.design', { opacity: 0, y: -80, skewX: '-10deg', delay: 0.2 })
        .from('.labs', { opacity: 0, y: 80, skewX: '10deg' }, '-=1')
        .from('.scroll-indicator', { opacity: 0, y: 20, ease: 'sine.out' }, '-=0.5');
  
      const detailsSection = document.querySelector('.details-section');
      if (detailsSection) {
        gsap.from(detailsSection.querySelectorAll('h2, p, button'), {
          scrollTrigger: {
            trigger: detailsSection,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 40,
          stagger: 0.15,
          ease: 'power3.out',
          duration: 0.8,
        });
      }
    }, 100); // Small delay for reliability

    return () => {
      // Clean up any animations and timers
      clearTimeout(animTimeout);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf(['.design', '.labs', '.scroll-indicator']);
      gsap.killTweensOf('.details-section h2, .details-section p, .details-section button');
    };
  }, [pathname]);

  return (
    <>
      <Navbar />
      <section className="relative flex flex-col md:flex-row items-center justify-center h-screen bg-white text-center md:text-left">
        <h1 className={`${notable.className} design text-[4rem] sm:text-[8rem] md:text-[12rem] tracking-tight text-gray-900 mb-4 md:mb-0 md:mr-4`}>Design</h1>
        <h1 className={`${notable.className} labs text-[4rem] sm:text-[8rem] md:text-[12rem] tracking-tight text-gray-900 md:ml-4`}>Labs</h1>
        <div className="absolute bottom-10 flex flex-col items-center scroll-indicator">
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 animate-bounce" />
          <span className="text-xs sm:text-sm text-gray-500">Scroll Down</span>
        </div>
      </section>
      <section className="py-10 sm:py-20 bg-gray-50 details-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className={`${oldStandardTT.className} text-3xl sm:text-4xl font-bold text-gray-800 leading-tight`}>
              <span className="block">We Create Digital</span>
              <span className="block">Experiences With Purpose</span>
            </h2>
          </div>
          <div>
            <p className={`${quicksand.className} text-lg text-gray-600 mb-4`}>
              Design Labs helps forward-thinking brands build memorable web experiences that drive growth and engagement.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" className="px-4 py-2 text-gray-800 border border-gray-300 rounded-md hover:bg-gray-100 flex items-center space-x-2">
                <span>Get In Touch</span>
                <Mail className="w-4 h-4" />
              </Button>
              <Button variant="ghost" className="px-4 py-2 text-gray-800 border border-gray-300 rounded-md hover:bg-gray-100 flex items-center space-x-2">
                <span>View Work</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}