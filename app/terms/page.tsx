import { Card } from "@/components/ui/card";
import Navbar from "@/components/navbar";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Card className="p-8">
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using PresencePal, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">2. Use License</h2>
              <p className="text-muted-foreground">
                PresencePal grants you a personal, non-transferable, non-exclusive license to use the software for your personal or business use.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">3. Service Description</h2>
              <p className="text-muted-foreground">
                PresencePal is a service that maintains your Microsoft Teams presence status. We do not guarantee uninterrupted service or specific outcomes from using our service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">4. User Obligations</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>You must comply with all applicable laws and regulations</li>
                <li>You are responsible for maintaining the security of your account</li>
                <li>You must not use the service for any illegal or unauthorized purpose</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">5. Payment Terms</h2>
              <p className="text-muted-foreground">
                Subscription fees are billed in advance on a monthly basis. All payments are non-refundable unless required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">6. Termination</h2>
              <p className="text-muted-foreground">
                We reserve the right to terminate or suspend access to our service immediately, without prior notice or liability, for any reason.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">7. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify or replace these terms at any time. Your continued use of the service constitutes acceptance of any changes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">8. Contact Information</h2>
              <p className="text-muted-foreground">
                For any questions about these Terms, please contact us at support@presencepal.com
              </p>
            </section>
          </div>
        </Card>
      </div>
    </main>
  );
}