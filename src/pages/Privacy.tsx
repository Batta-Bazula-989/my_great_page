import { useEffect } from "react";
import { Link } from "react-router-dom";

const Privacy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <main className="min-h-screen bg-background">
      <div className="container px-4 py-20 max-w-3xl mx-auto">
        <Link
          to="/"
          className="inline-block mb-8 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to Home
        </Link>

        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground mb-10 text-sm">
          Last updated: February 2025
        </p>

        <div className="space-y-8 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold mb-3">
              What This Covers
            </h2>
            <p>
              This policy explains how I collect, use, and protect your
              information when you visit this website or get in touch with me.
              I offer consulting, audits, and implementation services for
              support teams — there are no user accounts, subscriptions, or
              SaaS products here.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">
              What Data I Collect
            </h2>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>
                <strong>Contact form submissions</strong> — your name, email,
                and message when you reach out through the site.
              </li>
              <li>
                <strong>Calendar bookings</strong> — scheduling details when
                you book a call via an embedded tool like Calendly.
              </li>
              <li>
                <strong>Email communication</strong> — anything you share when
                we correspond via email.
              </li>
              <li>
                <strong>Analytics data</strong> — basic, anonymized usage data
                (pages visited, device type, referral source) collected through
                tools like Google Analytics.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">
              Why I Collect It
            </h2>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>To respond to your inquiries and schedule calls.</li>
              <li>To understand how people find and use this website.</li>
              <li>
                To improve the site and the services I offer.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">
              How I Use Your Data
            </h2>
            <p>
              Your information is used solely for the purposes described above.
              I do not sell, rent, or share your personal data with third
              parties. If we move forward with a paid engagement, any client
              data shared during projects is handled under separate agreements
              and treated with strict confidentiality.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">
              Cookies & Analytics
            </h2>
            <p>
              This site may use cookies for basic analytics purposes. These
              help me understand traffic patterns and improve the user
              experience. No cookies are used for advertising or tracking
              across other websites. You can disable cookies in your browser
              settings at any time.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">
              Third-Party Services
            </h2>
            <p>
              This site may use third-party tools such as Calendly for
              scheduling and Google Analytics for traffic insights. These
              services have their own privacy policies, and I encourage you to
              review them. I choose tools that respect user privacy and limit
              data collection to what's necessary.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">
              Your Rights
            </h2>
            <p className="mb-2">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>Request access to the personal data I hold about you.</li>
              <li>Ask me to correct or delete your data.</li>
              <li>Withdraw consent for data processing at any time.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email me at{" "}
              <a
                href="mailto:romanzakharenko.r@gmail.com"
                className="text-primary hover:underline"
              >
                romanzakharenko.r@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">
              Data Security
            </h2>
            <p>
              I take reasonable precautions to protect your data from
              unauthorized access, loss, or misuse. However, no method of
              transmission over the internet is 100% secure, and I cannot
              guarantee absolute security.
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="font-display text-xl font-semibold mb-3">
              Disclaimer
            </h2>
            <p className="text-muted-foreground text-sm">
              This privacy policy is provided for transparency and is not a
              legal contract. It may be updated from time to time. If you have
              questions or concerns, feel free to reach out directly.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Privacy;
