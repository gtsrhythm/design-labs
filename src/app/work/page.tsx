"use client";

import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import { Old_Standard_TT, Quicksand } from 'next/font/google';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import Image from 'next/image';
import Link from 'next/link';

const oldStandardTT = Old_Standard_TT({ subsets: ['latin'], weight: ['400'] });
const quicksand = Quicksand({ subsets: ['latin'], weight: ['400', '500', '600'] });

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Lyrical IDE",
    category: "FOSS Project",
    description: "A free and open-source app for writing, organizing, and refining song lyrics. Built for lyricists who want a clean, focused writing environment.",
    year: "2025",
    services: ["Web Design", "Development", "UX/UI"],
    image: "/lyrical-ide.png",
    url: "https://gtsrhythm.github.io/lyrical-ide/landing.html"
  },
  {
    id: 2,
    title: "Automotive Detailing",
    category: "Landing Page",
    description: "A sleek and modern landing page for a local auto detailing service, built to drive bookings and showcase premium services.",
    year: "2025",
    services: ["Web Design", "Copywriting", "UI/UX"],
    image: "/automotive-detailing.png",
    url: null
  },
  {
    id: 3,
    title: "Dreams For Teens Foundation",
    category: "Nonprofit Website",
    description: "A purpose-driven site for a youth nonprofit focused on empowerment through basketball, scholarships, and community programs.",
    year: "2025",
    services: ["Web Design", "Branding", "UX/UI"],
    image: "/dreams-for-teens.png",
    url: "https://dft-foundation.com/"
  }
];

export default function Work() {
  useEffect(() => {
    // Clear existing animations
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    gsap.killTweensOf(['.work-header', '.work-intro', '.process-step', '.cta-section']);

    const animTimeout = setTimeout(() => {
      // Hero animations - no opacity, just transforms
      const heroTl = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 0.8 }
      });

      heroTl.from('.work-header', {
        y: 40,
        delay: 0.2
      })
        .from('.work-intro', {
          y: 30
        }, '-=0.5');

      // Remove portfolio grid animations completely

      // Process section animations - slide from left only
      const processSection = document.querySelector('.process-section');
      if (processSection) {
        gsap.from('.process-step', {
          scrollTrigger: {
            trigger: processSection,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          x: -20,
          stagger: 0.15,
          ease: 'power3.out',
          duration: 0.6,
        });
      }

      // CTA section animation - subtle slide up
      const ctaSection = document.querySelector('.cta-section');
      if (ctaSection) {
        gsap.from('.cta-content', {
          scrollTrigger: {
            trigger: ctaSection,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          y: 20,
          ease: 'power3.out',
          duration: 0.6,
        });
      }
    }, 100);

    return () => {
      clearTimeout(animTimeout);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf(['.work-header', '.work-intro', '.process-step', '.cta-section']);
    };
  }, []);

  const handleProjectClick = (project: typeof projects[0]) => {
    if (project.url) {
      window.open(project.url, '_blank', 'noopener,noreferrer');
    } else {
      toast.error("Unavailable to public access", {
        description: "This project is currently not available for public viewing.",
        duration: 3000,
      });
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col bg-white">
        {/* Hero Section */}
        <section className="px-6 sm:px-16 lg:px-32 py-24 pt-32">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h1 className={`${oldStandardTT.className} work-header text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight tracking-tight mb-6`}>
              Our Work
            </h1>
            <p className={`${quicksand.className} work-intro text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed`}>
              Explore our carefully crafted digital experiences. Each project represents a unique collaboration and a commitment to exceptional design and functionality.
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="px-6 sm:px-16 lg:px-32 pb-20 portfolio-section">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="project-card bg-white rounded-2xl overflow-hidden group cursor-pointer border border-gray-100 hover:border-gray-200 transition-all duration-300"
                  onClick={() => handleProjectClick(project)}
                >
                  {/* Project Image */}
                  <div className="relative aspect-video bg-gray-100 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button variant="ghost" className="p-2 bg-white/90 hover:bg-white">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`${quicksand.className} text-sm text-gray-500 uppercase tracking-wide`}>
                        {project.category}
                      </span>
                      <span className={`${quicksand.className} text-sm text-gray-400`}>
                        {project.year}
                      </span>
                    </div>

                    <h3 className={`${quicksand.className} text-xl font-medium text-gray-800 mb-3 group-hover:text-gray-900 transition-colors`}>
                      {project.title}
                    </h3>

                    <p className={`${quicksand.className} text-gray-600 text-sm leading-relaxed mb-4`}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, index) => (
                        <span
                          key={index}
                          className={`${quicksand.className} text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full`}
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50 process-section">
          <div className="max-w-7xl mx-auto px-6 sm:px-16 lg:px-32">
            <div className="text-center mb-16">
              <h2 className={`${oldStandardTT.className} text-3xl sm:text-4xl text-gray-900 mb-6`}>
                Our Process
              </h2>
              <p className={`${quicksand.className} text-lg text-gray-600 max-w-2xl mx-auto`}>
                Every project follows a thoughtful, collaborative process designed to deliver exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="process-step text-center space-y-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className={`${quicksand.className} text-gray-600 font-medium`}>01</span>
                </div>
                <h3 className={`${quicksand.className} text-lg font-medium text-gray-800`}>
                  Discovery
                </h3>
                <p className={`${quicksand.className} text-gray-600 text-sm leading-relaxed`}>
                  Understanding your goals, audience, and brand to create a strategic foundation.
                </p>
              </div>

              <div className="process-step text-center space-y-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className={`${quicksand.className} text-gray-600 font-medium`}>02</span>
                </div>
                <h3 className={`${quicksand.className} text-lg font-medium text-gray-800`}>
                  Design
                </h3>
                <p className={`${quicksand.className} text-gray-600 text-sm leading-relaxed`}>
                  Crafting beautiful, user-centered designs that align with your brand vision.
                </p>
              </div>

              <div className="process-step text-center space-y-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className={`${quicksand.className} text-gray-600 font-medium`}>03</span>
                </div>
                <h3 className={`${quicksand.className} text-lg font-medium text-gray-800`}>
                  Development
                </h3>
                <p className={`${quicksand.className} text-gray-600 text-sm leading-relaxed`}>
                  Building responsive, performant websites with clean, maintainable code.
                </p>
              </div>

              <div className="process-step text-center space-y-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className={`${quicksand.className} text-gray-600 font-medium`}>04</span>
                </div>
                <h3 className={`${quicksand.className} text-lg font-medium text-gray-800`}>
                  Launch
                </h3>
                <p className={`${quicksand.className} text-gray-600 text-sm leading-relaxed`}>
                  Delivering your project with ongoing support and optimization strategies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 cta-section">
          <div className="max-w-4xl mx-auto px-6 sm:px-16 lg:px-32 text-center">
            <div className="cta-content space-y-8">
              <h2 className={`${oldStandardTT.className} text-3xl sm:text-4xl text-gray-900 leading-tight`}>
                Ready to Start Your Project?
              </h2>
              <p className={`${quicksand.className} text-lg text-gray-600 max-w-2xl mx-auto`}>
                Let&apos;s discuss how we can help bring your vision to life with thoughtful design and expert development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className={`${quicksand.className} px-8 py-3 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg transition-colors duration-200 flex items-center space-x-2`}>
                    <span>Get Started</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="ghost" className={`${quicksand.className} px-8 py-3 text-gray-600 hover:text-gray-800 font-medium rounded-lg transition-colors duration-200`}>
                    View Process
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Toaster />
    </>
  );
}