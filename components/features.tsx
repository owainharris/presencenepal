import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Shield, Clock, MessageSquare, Zap, Lock } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Monitor className="w-10 h-10 text-primary" />,
      title: "Always Online Status",
      description: "Maintain an active presence on Teams without manual intervention"
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "Secure & Private",
      description: "Your credentials never leave your device. Complete privacy guaranteed"
    },
    {
      icon: <Clock className="w-10 h-10 text-primary" />,
      title: "24/7 Operation",
      description: "Works silently in the background, keeping you online around the clock"
    },
    {
      icon: <MessageSquare className="w-10 h-10 text-primary" />,
      title: "Instant Notifications",
      description: "Never miss important messages while maintaining your online status"
    },
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: "Light & Fast",
      description: "Minimal system resource usage, designed for efficiency"
    },
    {
      icon: <Lock className="w-10 h-10 text-primary" />,
      title: "Enterprise Ready",
      description: "Compliant with corporate security policies and requirements"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Why Choose Teams Always Online?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Designed for professionals who need to maintain constant availability
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}