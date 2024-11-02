// pages/terms.js
import Head from "next/head";

export default function Terms() {
  return (
    <div className="min-h-screen text-gray-200">
      <main className="max-w-full mx-auto bg-white pt-[4rem] rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-lime-400">
          Terms and Conditions
        </h1>
        <div className="shadow p-8 rounded-3xl mb-6">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ulndark">
              1. Introduction
            </h2>
            <p className="text-gray-700">
              Welcome to ULNCommunity! These Terms and Conditions outline the
              rules and regulations for the use of our website and services. By
              accessing this website, you agree to be bound by these terms. If
              you do not agree with any part of these terms, please refrain from
              using our website or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ulndark">
              2. Services Provided
            </h2>
            <p className="text-gray-700">
              ULNCommunity offers web development, application development, and
              various digital solutions. We strive to deliver high-quality
              services in accordance with client specifications, project
              timelines, and agreed-upon budgets.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ulndark">
              3. Intellectual Property
            </h2>
            <p className="text-gray-700">
              All content, logos, and materials provided by ULNCommunity are
              owned by us or our licensors. You may not use our materials
              without written permission, except for personal, non-commercial
              use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ulndark">
              4. User Responsibilities
            </h2>
            <p className="text-gray-700">
              By using our services, you agree to provide accurate, current, and
              complete information and to comply with all applicable laws and
              regulations. You are responsible for maintaining the
              confidentiality of your account and for all activities that occur
              under your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ulndark">
              5. Project Terms
            </h2>
            <p className="text-gray-700">
              <strong>Scope and Changes</strong>: Any modifications to the
              agreed scope of work after a project has begun may incur
              additional costs.
              <br />
              <strong>Payment Terms</strong>: Payments are due as specified in
              the project proposal. Late payments may result in project delays.
              <br />
              <strong>Delivery and Revisions</strong>: Project delivery
              timelines will be discussed with each client. Revisions are
              subject to the terms in the proposal, and any additional revisions
              beyond the agreed scope may incur extra charges.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ulndark">
              6. Confidentiality
            </h2>
            <p className="text-gray-700">
              ULNCommunity values your privacy. We will keep all sensitive
              information regarding your business and project confidential,
              except where required by law or with your consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ulndark">
              7. Limitation of Liability
            </h2>
            <p className="text-gray-700">
              We are not liable for any indirect, incidental, or consequential
              damages arising from the use of our website or services. Our
              liability will be limited to the amount paid by you for our
              services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ulndark">
              8. Termination
            </h2>
            <p className="text-gray-700">
              We reserve the right to terminate or suspend access to our website
              or services if you breach these Terms and Conditions. Upon
              termination, you must cease all use of our website and any
              materials obtained through our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ulndark">
              9. Governing Law
            </h2>
            <p className="text-gray-700">
              These Terms and Conditions are governed by the laws of [Your
              Jurisdiction]. Any disputes arising out of these terms will be
              resolved in accordance with the laws of this jurisdiction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ulndark">
              10. Changes to Terms
            </h2>
            <p className="text-gray-700">
              ULNCommunity may update these Terms and Conditions at any time. We
              will notify users of any significant changes. Continued use of the
              website or services after changes constitute acceptance of the
              updated terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ulndark">
              11. Contact Us
            </h2>
            <p className="text-gray-700">
              For any questions or concerns regarding these Terms and
              Conditions, please contact us at:
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>
                <strong>Email:</strong> ulnlabs@gmail.com
              </li>
              <li>
                <strong>Phone:</strong> +91 9384126303
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
