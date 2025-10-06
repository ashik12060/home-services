import React from "react";
import Header from "../components/Shared/Header/Header";
import Footer from "../components/Footer";

const TermsAndCondition = () => {
  return (
    <>
      <Header />

      <div className="bg-gray-50 text-gray-900">
        <div className="px-6 sm:px-8 lg:px-12 py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 border-b border-gray-300 pb-3">
            Terms and Conditions of Use
          </h1>

          <div className="space-y-6 text-lg leading-relaxed text-left mx-20">
            <p>
              Welcome to <strong>Easyhomeservice.com!</strong> We want to ensure you understand your
              rights, obligations, and what we promise you in relation to using our websites and
              services. Please review the terms below carefully. Here’s what you should know:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Privacy is Key:</strong> We take your privacy seriously. Please read our{" "}
                <a
                  href="/privacy-policy"
                  className="text-blue-600 hover:underline"
                >
                  Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong>Your Consent:</strong> By taking actions such as requesting information,
                accepting terms, or submitting information, you're giving consent for
                Easyhomeservice.com and its partners to contact you.
              </li>
              <li>
                <strong>Our Limitations:</strong> Easyhomeservice.com is not liable for your
                activities, and we make no warranties regarding our sites.
              </li>
              <li>
                <strong>Arbitration Agreement:</strong> If disputes arise, you agree to resolve them
                through arbitration.
              </li>
            </ul>

            {/* SECTION 1 */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-10">1. About These Terms of Use</h2>
            <p>
              <strong>Easyhomeservice.com</strong> ("Easyhomeservice.com", "we", "us", or "our")
              operates various websites, including this one (each a "Site" and collectively, the
              "Sites"). Your use of the Site, its content ("Content"), and services implies your
              agreement to these legally binding terms and conditions ("Terms"). These Terms are a
              contract between you and Easyhomeservice.com governing your use of the Site.
            </p>
            <p>
              By using the Site, you confirm that you have the necessary authorizations to enter
              this agreement and that your use complies with the law. If you're using the Site on
              behalf of an entity, you affirm you have the authority to bind it to these Terms. You
              must be a U.S. resident and at least 18 years old to access the Site.
            </p>

            {/* SECTION 2 */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-10">2. Consent and Privacy</h2>
            <p>
              By submitting requests, accepting terms, or other actions, you agree to the terms of
              that interaction. You're consenting to be contacted by Easyhomeservice.com and
              partners via phone or email, even if you are on a Do Not Call list. SMS/MMS message
              rates may apply. The information you provide should be accurate and complete. We may
              add your contact details to our database and send you marketing materials.
            </p>

            {/* SECTION 3 */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-10">3. Our Services</h2>
            <p>
              We're not an insurance company, healthcare provider, or Medicare provider. We're a
              platform where Providers offer insurance and services. We're not responsible for
              transactions between users or for services. Our compensation comes from Providers
              displaying ads and purchasing leads. We don't endorse or guarantee any Provider,
              outcome, or offer. Your use of the Site and services signifies your agreement with our
              compensation arrangement.
            </p>

            {/* SECTION 4 */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-10">4. Personal Use</h2>
            <p>
              We allow users to access the Site for legitimate purposes without charge. You have
              limited rights to access, inquire, and use services as per these Terms. Unauthorized
              use, such as data extraction tools, is prohibited without our consent. Search engines
              and non-commercial archives are exceptions, subject to our rules.
            </p>

            {/* SECTION 5 */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-10">
              5. Proprietary Rights and Downloading Information
            </h2>
            <p>
              The Site and its Content are protected by domestic and international copyright laws.
              All materials — text, images, files, and data — are for personal use only unless you
              have our written permission. Copying, storing, or redistributing content without
              authorization is strictly prohibited.
            </p>
            <p>
              All trademarks, logos, and service marks used on the Sites are the exclusive property
              of Easyhomeservice.com or its licensors. You may not copy or use them in any manner,
              and any goodwill from their use benefits us.
            </p>

            {/* SECTION 6 */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-10">6. Unauthorized Use</h2>
            <p>
              Unless permitted by these Terms or applicable law, you must obtain our written consent
              before:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Copying, reproducing, or transmitting any part of the Content.</li>
              <li>Reproducing any part of the Site on your own website.</li>
              <li>Creating derivative works or reverse engineering any portion of the Site.</li>
              <li>Selling, licensing, or offering any portion of the Site for sale.</li>
              <li>
                Using automated tools to extract or monitor Content without our authorization.
              </li>
              <li>Using the Site for fraudulent, unlawful, or offensive activities.</li>
              <li>Uploading malicious software or interfering with the Site’s operations.</li>
            </ul>

            <p>
              If we suspect any violations of these terms, we reserve the right to terminate your
              access to the Site without notice.
            </p>

            {/* SECTION 7 */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-10">7. Changes to the Site</h2>
            <p>
              We may modify, suspend, or discontinue any part of the Site, including features and
              content, with or without notice. We also reserve the right to restrict access without
              liability.
            </p>

            {/* SECTION 8 */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-10">8. Data Transmission</h2>
            <p>
              By using the Site, you consent to the transfer and processing of data both within and
              outside the United States. Any transactions on the Site are deemed to have occurred in
              the U.S.
            </p>

            {/* SECTION 9 */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-10">9. Disclaimer of Warranties</h2>
            <p>
              The Sites and all services, software, and content are provided “as is.” We disclaim
              all express or implied warranties, including non-infringement, merchantability,
              accuracy, and fitness for a particular purpose. We do not guarantee error-free or
              uninterrupted operation. Some jurisdictions do not allow the exclusion of implied
              warranties, so certain limitations may not apply.
            </p>

            {/* SECTION 10 */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-10">10. Release</h2>
            <p>
              If you have a dispute with other users, Providers, or Prospects, you agree to release
              Easyhomeservice.com and its affiliates from any claims, obligations, or damages
              arising from such disputes.
            </p>

            {/* SECTION 11 */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-10">11. Amendments</h2>
            <p>
              We may modify or update these Terms at any time. The revised Terms become effective
              once posted on the Site. Your continued use indicates acceptance of those changes.
              Please review these Terms periodically.
            </p>

            {/* SECTION 12 */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-10">12. Links to Third-Party Sites</h2>
            <p>
              The Site may include links to third-party websites not owned or controlled by
              Easyhomeservice.com. We are not responsible for their content, services, or privacy
              practices. Use third-party sites at your own risk after reviewing their terms and
              policies.
            </p>

            {/* SECTION 13 */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-10">13. Feedback and Questions</h2>
            <p>
              We value your feedback and inquiries. For comments or legal correspondence, please
              contact us at{" "}
              <a
                href="mailto:info@Easyhomeservice.com"
                className="text-blue-600 hover:underline"
              >
                info@Easyhomeservice.com
              </a>
              .
            </p>
            <p>
              By providing feedback, you grant Easyhomeservice.com a worldwide, perpetual,
              royalty-free license to use, reproduce, and adapt that feedback for product and
              service improvement.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TermsAndCondition;
