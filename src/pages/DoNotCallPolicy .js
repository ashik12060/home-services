import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Shared/Header/Header";

const DoNotCallPolicy = () => {
  return (
    <>
      <Header />

      <div className="bg-gray-50 text-gray-900">
        <div className="px-6 sm:px-8 lg:px-12 py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 border-b border-gray-300 pb-3">
            Do Not Call Policy
          </h1>

          <div className="space-y-6 leading-relaxed text-lg text-left  mx-20">
            <p>
              At <strong>Easy Home Service, LLC</strong> (“Company”), we are committed to
              maintaining high standards in our business practices. Our goal is to respect the
              privacy of those who do not wish to be contacted. This policy applies to all marketing
              and solicitation efforts conducted by the Company and its affiliates, employees, and
              agents.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              Telephone Consumer Protection Act Summary
            </h2>

            <p>
              The <strong>Telephone Consumer Protection Act (TCPA)</strong> and related FCC
              regulations protect consumers from unwanted telemarketing. Telemarketing involves
              calls or messages encouraging the purchase of goods or services. The TCPA includes
              rules that telemarketers must follow, such as:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Maintaining a Do Not Call (DNC) policy.</li>
              <li>
                Making calls or sending messages only between 8:00 a.m. and 9:00 p.m. (local time of
                the recipient).
              </li>
              <li>
                Not contacting numbers on the National Do Not Call List or the Company’s internal
                DNC list.
              </li>
              <li>Identifying the caller’s name, location, and company.</li>
              <li>Providing a copy of the DNC policy upon request.</li>
            </ul>

            <p>
              Consumers can add their phone numbers to the{" "}
              <strong>National Do Not Call Registry</strong> to reduce telemarketing calls by
              calling{" "}
              <a href="tel:8883821222" className="text-blue-600 hover:underline">
                888-382-1222
              </a>{" "}
              or visiting{" "}
              <a
                href="https://www.donotcall.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                www.donotcall.gov
              </a>
              .
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              Easy Home Service’s Do Not Call Policy
            </h2>

            <p>
              Consumers can request by phone or in writing to be placed on our internal DNC list,
              even if they are customers. Such requests will be honored, and the number will be
              added to our list within seven (7) business days, although it may take up to fourteen
              (14) days to be removed from all lists. The request remains valid for at least five
              (5) years, but consumers must inform us of any changes in their phone numbers to
              continue to be on our DNC list. Additional guidelines include:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                Telemarketing calls and texts will not be made before 8:00 a.m. or after 9:00 p.m.
                local time.
              </li>
              <li>
                Callers must provide their name, the Company’s phone number, and state the purpose
                of the call.
              </li>
              <li>
                No calls or texts will be made to numbers on the internal DNC list, state DNC
                registries, or the National Do Not Call Registry unless:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    There has been an established business relationship within the past 18 months.
                  </li>
                  <li>The recipient gave express permission within the past 3 months.</li>
                  <li>The caller has a personal relationship with the recipient.</li>
                </ul>
              </li>
              <li>
                Employees and agents must forward any DNC requests to the administrator responsible
                for maintaining the DNC list and log the request details. All employees involved in
                telemarketing are trained on this policy and must review it annually.
              </li>
            </ul>

            <p>
              Third-party companies may occasionally perform telemarketing on our behalf. We provide
              them with up-to-date copies of our DNC list.
            </p>

            <p>
              At <strong>Easy Home Service, LLC</strong>, we respect customer privacy and
              continuously review our DNC policy to stay compliant with TCPA regulations. If you
              believe you were contacted in violation of our policy or any laws, please contact us
              at{" "}
              <a
                href="mailto:info@easyhomeservice.com"
                className="text-blue-600 hover:underline"
              >
                info@easyhomeservice.com
              </a>
              .
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              Request for Do Not Call Policy
            </h2>

            <p>
              Our <strong>“Do Not Call Policy”</strong> is available on our website at{" "}
              <a
                href="https://easyhomeservice.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                easyhomeservice.com
              </a>
              . Anyone requesting a copy of our “Do Not Call Policy” is entitled to receive it.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DoNotCallPolicy;
