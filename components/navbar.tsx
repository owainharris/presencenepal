"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import AuthButton from "./auth-button";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push('/')}>
            <img
              src="/presencepal-logo.png"
              alt="PresencePal"
              className="w-8 h-8 object-contain"
            />
            <span className="font-bold text-lg">PresencePal</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => scrollToSection('features')}>
              Features
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('pricing')}>
              Pricing
            </Button>
            <Button variant="ghost" onClick={() => router.push('/support')}>
              Support
            </Button>
            <ModeToggle />
            <AuthButton />
          </div>
        </div>
      </div>
    </nav>
  );
}