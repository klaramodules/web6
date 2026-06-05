"use client";

export default function PrivacyPage() {
  const forestGreen = "#2F3E2F";
  const beige = "#f5f0e6";

  return (
    <section
      className="min-h-screen w-full"
      style={{
        background: "linear-gradient(to bottom, #f5f0e6, #e6e1d8)",
        color: forestGreen,
      }}
    >
      <div className="max-w-3xl mx-auto px-6 py-20">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-semibold mb-10">
          Privacy Policy
        </h1>

        {/* META */}
        <p className="text-sm opacity-70 mb-10">
          Effective date: 2026
        </p>

        {/* SECTION 1 */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-3">
            Data we collect
          </h2>
          <p className="text-sm leading-relaxed opacity-80">
            We collect personal data such as name, email address, and country
            when you submit a contact or catalogue request through this website.
          </p>
        </div>

        {/* SECTION 2 */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-3">
            How we use your data
          </h2>
          <p className="text-sm leading-relaxed opacity-80">
            We use your data to provide access to the catalogue download,
            respond to your inquiries, and contact you regarding relevant updates
            and services related to Klara Modules.
          </p>
        </div>

        {/* SECTION 3 */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-3">
            Data sharing
          </h2>
          <p className="text-sm leading-relaxed opacity-80">
            We do not sell, rent, or share your personal data with third parties.
          </p>
        </div>

        {/* SECTION 4 */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-3">
            Data storage
          </h2>
          <p className="text-sm leading-relaxed opacity-80">
            Your data is stored securely and only for as long as necessary to
            handle your request and potential follow-up communication.
          </p>
        </div>

        {/* SECTION 5 */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-3">
            Your rights
          </h2>
          <p className="text-sm leading-relaxed opacity-80">
            You may request access, correction, or deletion of your personal data
            at any time by contacting us.
          </p>
        </div>

        {/* CONTACT */}
        <div className="mt-14 pt-10 border-t border-black/10">
          <h2 className="text-xl font-semibold mb-3">
            Contact
          </h2>
          <p className="text-sm leading-relaxed opacity-80">
            If you have any questions about this Privacy Policy, please contact:
            <br />
            <span className="font-medium">
              klaramodules@gmail.com
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}