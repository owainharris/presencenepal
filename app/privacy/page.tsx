import { Card } from "@/components/ui/card";
import Navbar from "@/components/navbar";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Card className="p-8">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mt-2 space-y-2">
                <li>Account information (email, name)</li>
                <li>Microsoft Teams authentication tokens</li>
                <li>Usage data and preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground">
                We use the collected information to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mt-2 space-y-2">
                <li>Provide and maintain our service</li>
                <li>Process your transactions</li>
                <li>Send you service-related notifications</li>
                <li>Improve and optimize our service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">3. Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">4. Data Retention</h2>
              <p className="text-muted-foreground">
                We retain your information only for as long as necessary to provide you with our service and as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mt-2 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">6. Third-Party Services</h2>
              <p className="text-muted-foreground">
                Our service integrates with Microsoft Teams. Please review Microsofts privacy policy for information about how they handle your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">7. Changes to Privacy Policy</h2>
              <p className="text-muted-foreground">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">8. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at privacy@presencepal.com
              </p>
            </section>
          </div>
        </Card>
      </div>
    </main>
  );
}