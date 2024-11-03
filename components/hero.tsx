"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/5" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
            Stay Connected 24/7 on Microsoft Teams
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
            Never appear offline again. Our Windows application keeps your Teams status active, ensuring you are always available when it matters most.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg" className="gap-2" onClick={() => scrollToSection('pricing')}>
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2" onClick={() => scrollToSection('features')}>
              Learn More <MessageCircle className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* App Preview */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent h-40 -bottom-1" />
          <div className="relative rounded-xl overflow-hidden shadow-2xl border bg-card">
            <Image
              src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="PresencePal Application"
              width={2071}
              height={1380}
              className="w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}