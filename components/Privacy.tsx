
import React, { useEffect } from 'react';

const Privacy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-12 text-pure-black">Privacy Policy</h1>
        
        <div className="prose prose-lg text-text-secondary space-y-10">
          <section className="p-8 rounded-[2.5rem] bg-brand-teal/5 border border-brand-teal/20">
            <p className="text-text-primary font-medium">
              At Scanything, your health data is your own. We follow a "Privacy by Design" approach, ensuring that your most sensitive information is encrypted and handled with the highest level of care.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-pure-black mb-4">1. Information Collection: The Basics</h2>
            <p>When you use Scanything, we collect certain information to provide the service:</p>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li><strong>Account Info:</strong> Email address and name for synchronization across devices.</li>
              <li><strong>Scan Data:</strong> Images of product labels you scan. These images are processed to extract text.</li>
              <li><strong>Health Profile:</strong> Sensitive data you choose to provide (e.g., "I am pregnant," "I have Type 2 Diabetes," "Allergic to Peanuts").</li>
              <li><strong>Device Info:</strong> Operating system, device model, and unique identifiers for troubleshooting and analytics.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-pure-black mb-4">2. Camera & Image Processing</h2>
            <p>Scanything requires access to your device's camera. <strong>We do not take photos without your explicit action.</strong></p>
            <p className="mt-4">
              When you "Scan" a label, the image is sent to our secure servers and then to our Scanything AI engine for analysis. Images are used solely for ingredient extraction and are not shared with third-party advertisers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-pure-black mb-4">3. Use of AI (Artificial Intelligence)</h2>
            <p>We use Scanything AI to interpret complex ingredient lists. The data processed by our engine is stripped of personal identifiers where possible. However, if a product label contains personal info (like a prescription label), that info may be processed. We advise users to scan <strong>only</strong> the ingredient list section of product packaging.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-pure-black mb-4">4. Data Retention & Deletion</h2>
            <p>We retain your scan history so you can track your health progress. You have the right at any time to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Delete individual scans from your history.</li>
              <li>Clear your entire Health Profile.</li>
              <li>Request full account deletion by emailing <strong>privacy@scanything.ai</strong>. Data is typically purged within 30 days of a valid request.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-pure-black mb-4">5. Third-Party Sharing</h2>
            <p><strong>We do not sell your personal or health data to brokers or insurance companies.</strong> We only share data with:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Cloud Service Providers:</strong> For hosting our database and infrastructure (e.g., Google Cloud, Vercel).</li>
              <li><strong>AI Infrastructure Partners:</strong> Specifically for processing the content of scanned labels via our private AI nodes.</li>
              <li><strong>Legal Authorities:</strong> Only when strictly required by law or a valid court order.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-pure-black mb-4">6. Children's Privacy</h2>
            <p>Scanything is intended for users 13 years of age and older. We do not knowingly collect personal information from children under 13. If we discover a child under 13 has provided us with personal information, we will delete it immediately.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-pure-black mb-4">7. International Data Transfers</h2>
            <p>Your information may be transferred to—and maintained on—computers located outside of your state or country where data protection laws may differ. By using Scanything, you consent to this transfer.</p>
          </section>

          <section className="pt-8 border-t border-border-soft">
            <p className="text-sm font-semibold text-pure-black">Last updated: January 2026</p>
            <p className="text-xs mt-2 italic">For any privacy-related inquiries, please contact our Data Protection Officer at <strong>privacy@scanything.ai</strong></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
