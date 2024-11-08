"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";
import { Github, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Provider } from '@supabase/supabase-js';
import Image from "next/image";

// Update the type declaration
type AuthProvider = 'azure' | Exclude<Provider, 'azure'>;

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleOAuthSignIn = async (provider: AuthProvider) => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider as Provider,
        options: {
          redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
          queryParams: provider === 'azure' ? {
            prompt: 'consent',
            access_type: 'offline'
          } : undefined,
        },
      });

      if (error) throw error;

      if (data.url) {
        window.location.href = data.url;
      }
      
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred during authentication",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md p-8">
        <div className="flex justify-center mb-8">
          <Image
            src="/presencepal-logo.png"
            alt="PresencePal"
            width={64}
            height={64}
            className="object-contain"
            priority
          />
        </div>
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Welcome to PresencePal</h1>
          <p className="text-muted-foreground">Sign in to manage your account</p>
        </div>

        <div className="space-y-4">
          <Button
            variant="outline"
            className="w-full relative"
            onClick={() => handleOAuthSignIn('google')}
            disabled={isLoading}
          >
            <Mail className="mr-2 h-4 w-4" />
            <span className="flex-1">Continue with Google</span>
            {isLoading && (
              <div className="absolute right-4 w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            )}
          </Button>

          <Button
            variant="outline"
            className="w-full relative"
            onClick={() => handleOAuthSignIn('azure')}
            disabled={isLoading}
          >
            <svg className="mr-2 h-4 w-4" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M11 11H0V0h11zm12 0H12V0h11zM11 23H0V12h11zm12 0H12V12h11z"/>
            </svg>
            <span className="flex-1">Continue with Microsoft</span>
            {isLoading && (
              <div className="absolute right-4 w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            )}
          </Button>

          <Button
            variant="outline"
            className="w-full relative"
            onClick={() => handleOAuthSignIn('github')}
            disabled={isLoading}
          >
            <Github className="mr-2 h-4 w-4" />
            <span className="flex-1">Continue with GitHub</span>
            {isLoading && (
              <div className="absolute right-4 w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            )}
          </Button>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          By continuing, you agree to our{" "}
          <Link href="/terms" className="underline hover:text-primary">Terms of Service</Link>
          {" "}and{" "}
          <Link href="/privacy" className="underline hover:text-primary">Privacy Policy</Link>
        </div>
      </Card>
    </div>
  );
}