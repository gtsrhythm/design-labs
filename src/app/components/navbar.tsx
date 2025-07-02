"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Domine } from "next/font/google";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";

const domine = Domine({ subsets: ["latin"], weight: "700" });

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Kill any existing animations
    gsap.killTweensOf([".navbar-logo", ".navbar-header", ".navbar-item"]);

    // Reset elements to their natural state
    gsap.set([".navbar-logo", ".navbar-header", ".navbar-item"], { clearProps: "all" });

    const navTimeout = setTimeout(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" }
      });

      tl.from(".navbar-logo", {
        duration: 0.5,
        scale: 0.8,
        opacity: 0,
      })
      .from(
        ".navbar-header",
        {
          duration: 0.5,
          y: -20,
          opacity: 0,
        },
        "-=0.4"
      )
      .from(
        ".navbar-item",
        {
          duration: 0.5,
          y: -20,
          opacity: 0,
          stagger: 0.15,
        },
        "-=0.4"
      );
    }, 50); // Small delay for reliability

    return () => {
      clearTimeout(navTimeout);
      gsap.killTweensOf([".navbar-logo", ".navbar-header", ".navbar-item"]);
    };
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link
          href="/"
          className="flex items-center space-x-4 group cursor-pointer"
        >
          <Image
            src="/logo.png"
            alt="Design Labs Logo"
            width={40}
            height={40}
            className="navbar-logo group-hover:scale-105 transition-transform"
          />
          <div className="navbar-header">
            <span
              className={`${domine.className} text-lg font-bold text-gray-800`}
            >
              DESIGNLABS
            </span>
            <span className="block text-sm text-gray-500">WEB DESIGN</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/about">
            <Button
              variant="ghost"
              className="text-gray-500 hover:text-gray-800 navbar-item"
            >
              About
            </Button>
          </Link>
          <Link href="/work">
            <Button
              variant="ghost"
              className="text-gray-500 hover:text-gray-800 navbar-item"
            >
              Work
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="ghost"
              className="text-gray-500 hover:text-gray-800 navbar-item"
            >
              Contact
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="navbar-item">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className={`${domine.className} text-left`}>
                  DESIGNLABS
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-8">
                <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-500 hover:text-gray-800"
                  >
                    About
                  </Button>
                </Link>
                <Link href="/work" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-500 hover:text-gray-800"
                  >
                    Work
                  </Button>
                </Link>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-500 hover:text-gray-800"
                  >
                    Contact
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;