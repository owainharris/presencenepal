"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

export default function Dashboard() {
  const [subscription, setSubscription] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSubscription();
  }, []);

  const fetchSubscription = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase
          .from('subscriptions')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (error) throw error;
        setSubscription(data);
      }
    } catch (error) {
      console.error('Error fetching subscription:', error);
      toast({
        title: "Error",
        description: "Failed to fetch subscription details.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Subscription Status</h2>
        {subscription ? (
          <div>
            <p>Plan: {subscription.plan_type}</p>
            <p>Status: {subscription.status}</p>
            <p>Expires: {new Date(subscription.expires_at).toLocaleDateString()}</p>
          </div>
        ) : (
          <div>
            <p className="mb-4">No active subscription found.</p>
            <Button>Start Free Trial</Button>
          </div>
        )}
      </Card>
    </div>
  );
}