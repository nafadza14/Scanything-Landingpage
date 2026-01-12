
import React, { useEffect } from 'react';

const Terms: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-12 text-pure-black">Terms & Conditions</h1>
        
        <div className="prose prose-lg text-text-secondary space-y-10">
          <section className="bg-primary/5 p-8 rounded-[2.5rem] border-l-8 border-primary mb-12">
            <h2 className="text-2xl font-bold text-pure-black mb-4 uppercase tracking-tight">🚨 Critical Medical Disclaimer</h2>
            <p className="text-text-primary font-medium leading-relaxed">
              Scanything is NOT a medical device. The "Health Scores," "Alerts," and "Analysis" provided by our AI are for informational purposes only. They do not constitute medical advice, diagnosis, or treatment. 
            </p>
            <p className="mt-4">
              <strong>Never ignore professional medical advice</strong> or delay seeking it because of something you have read on Scanything. If you have a severe allergy or medical condition, always consult a healthcare professional before using a new product.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-pure-black mb-4">1. Agreement to Terms</h2>
            <p>By downloading, accessing, or using the Scanything application and website (collectively, the "Service"), you agree to be bound by these Terms. If you are using the Service on behalf of an organization, you agree to these Terms for that organization.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-pure-black mb-4">2. AI-Powered Analysis & Accuracy</h2>
            <p>Scanything utilizes advanced Artificial Intelligence (Gemini AI) to parse ingredient labels. You acknowledge that:</p>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li>AI can occasionally produce "hallucinations" or incorrect interpretations of chemical names.</li>
              <li>Handwriting or damaged labels may significantly decrease analysis accuracy.</li>
              <li>Product formulations change frequently; the data in our database may not reflect the latest version of a product sitting on a shelf.</li>
              <li>We do not guarantee the accuracy, completeness, or usefulness of any automated analysis.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-pure-black mb-4">3. User Responsibilities</h2>
            <p>As a condition of your use of the Service, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Use Scanything as the sole basis for making decisions about life-threatening allergies.</li>
              <li>Reverse engineer, decompile, or attempt to extract the source code of our AI scanning engine.</li>
              <li>Upload images that contain personally identifiable information (PII) of third parties or offensive content.</li>
              <li>Scrape or bulk-download product data from our proprietary database.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-pure-black mb-4">4. Personal Health Profiles</h2>
            <p>The "Personalized AI Alerts" feature relies entirely on the accuracy of the information you provide in your Health Profile. Scanything is not liable for adverse reactions resulting from incomplete or inaccurate user profiles.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-pure-black mb-4">5. Intellectual Property</h2>
            <p>The Service, including the Scanything name, logo, scanning technology, and original content, is protected by copyright and trademark laws. "Scanything" is a trademark of Scanything Health. Your use of the Service does not grant you ownership of any content or data you access.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-pure-black mb-4">6. Limitation of Liability</h2>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, SCANYTHING SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES, INCLUDING LOSS OF HEALTH OR WELL-BEING, RESULTING FROM THE USE OR THE INABILITY TO USE THE SERVICE OR FROM ANY CONTENT OBTAINED FROM THE SERVICE.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-pure-black mb-4">7. Termination</h2>
            <p>We reserve the right to suspend or terminate your access to Scanything at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users of the Service, us, or third parties, or for any other reason.</p>
          </section>

          <section className="pt-8 border-t border-border-soft">
            <p className="text-sm font-semibold text-pure-black">Last updated: January 2026</p>
            <p className="text-xs mt-2">© 2026 Scanything Health. All rights reserved.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
