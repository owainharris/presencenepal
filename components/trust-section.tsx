import { Card } from "@/components/ui/card";

export default function TrustSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Trusted by Remote Workers Worldwide</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 bg-background/60 backdrop-blur">
            <p className="text-2xl font-bold mb-2">10,000+</p>
            <p className="text-muted-foreground">Active Users</p>
          </Card>
          <Card className="p-6 bg-background/60 backdrop-blur">
            <p className="text-2xl font-bold mb-2">99.9%</p>
            <p className="text-muted-foreground">Uptime</p>
          </Card>
          <Card className="p-6 bg-background/60 backdrop-blur">
            <p className="text-2xl font-bold mb-2">24/7</p>
            <p className="text-muted-foreground">Support</p>
          </Card>
        </div>
      </div>
    </section>
  );
}