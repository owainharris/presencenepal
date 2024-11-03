"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { toast } from "@/components/ui/use-toast";

export default function PricingSection() {
  const router = useRouter();
  
  const handleStartTrial = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      toast({
        title: "Sign in required",
        description: "Please sign in to start your free trial",
        variant: "default",
      });
      router.push('/auth');
      return;
    }
    
    router.push('/dashboard?trial=true');
  };

  const features = [
    "Always online status",
    "Automatic status updates",
    "Background operation",
    "Priority support",
    "Multiple device support",
    "Custom status messages"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start with a 7-day free trial, then choose the plan that works for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Trial Card */}
          <Card className="relative overflow-hidden border-2 border-primary/20">
            <CardHeader>
              <CardTitle>Free Trial</CardTitle>
              <CardDescription>Perfect for testing the service</CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-bold">$0</span>
                <span className="text-muted-foreground ml-2">for 7 days</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg" onClick={handleStartTrial}>
                Start Free Trial
              </Button>
            </CardFooter>
          </Card>

          {/* Premium Card */}
          <Card className="relative overflow-hidden border-2 border-primary">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm">
              Popular
            </div>
            <CardHeader>
              <CardTitle>Premium</CardTitle>
              <CardDescription>For continuous professional use</CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-bold">$9.99</span>
                <span className="text-muted-foreground ml-2">per month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg" variant="default" onClick={handleStartTrial}>
                Subscribe Now
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}