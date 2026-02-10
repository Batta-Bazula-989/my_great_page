import { useEffect } from "react";
import { Link } from "react-router-dom";

const Terms = () => {
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
          Terms of Service
        </h1>
        <p className="text-muted-foreground mb-10 text-sm">
          Last updated: February 2025
        </p>

        <div className="space-y-8 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold mb-3">
              Overview
            </h2>
            <p>
              This page outlines the general terms under which I provide
              consulting, automation, and technical support services. By
              engaging my services, you agree to these terms. Specific project
              details — scope, timelines, deliverables, and pricing — are
              always agreed separately in writing (via contract, proposal, or
              platform like Upwork).
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">
              Services
            </h2>
            <p>
              I offer consulting, audits, and implementation services focused
              on customer support operations. This includes workflow
              automation, AI integrations, tool configuration, and process
              improvements. These are advisory and implementation services —
              not a software product or managed platform.
            </p>
            <p className="mt-3 text-foreground/80">
              Results depend on many factors including your existing systems,
              team capacity, and how recommendations are implemented. I do not
              guarantee specific business outcomes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">
              Client Responsibilities
            </h2>
            <p className="mb-2">To deliver effective work, I rely on you to:</p>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>
                Provide timely access to the tools, systems, and accounts
                relevant to the project.
              </li>
              <li>
                Share accurate and complete information about your current
                workflows and requirements.
              </li>
              <li>
                Respond to questions and provide feedback within reasonable
                timeframes.
              </li>
              <li>
                Designate a point of contact for project communication.
              </li>
            </ul>
            <p className="mt-3 text-foreground/80">
              Delays in access or feedback may affect project timelines and
              deliverables.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">
              Timelines & Delivery
            </h2>
            <p>
              Project timelines are estimated based on the agreed scope and
              depend on timely access and client responsiveness. I will
              communicate proactively if delays arise on my end. If delays are
              caused by late access or feedback, timelines will be adjusted
              accordingly.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">
              Payments
            </h2>
            <p>
              This website does not process payments directly. Payment terms,
              methods, and schedules are agreed separately as part of each
              project engagement — typically via invoice, contract, or
              freelance platform.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">
              Intellectual Property
            </h2>
            <p>
              Upon full payment, all custom work product (automations,
              configurations, documentation) created for your project
              transfers to you, unless otherwise agreed in writing. I retain
              the right to use general knowledge, techniques, and
              non-confidential methodologies gained during the engagement.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">
              Confidentiality
            </h2>
            <p>
              I treat all client information shared during a project as
              confidential. I will not disclose your business data, internal
              processes, or proprietary information to third parties without
              your explicit consent. This obligation continues after the
              engagement ends.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">
              Limitation of Liability
            </h2>
            <p>
              My services are provided in good faith and to professional
              standards. However, I am not liable for indirect, incidental, or
              consequential damages — including lost revenue, data loss, or
              business interruption — arising from the use of my services or
              deliverables. Total liability is limited to the fees paid for
              the specific project in question.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">
              Termination
            </h2>
            <p>
              Either party may end an engagement with reasonable written
              notice. If a project is terminated early, payment is due for
              work completed up to that point. Any specific cancellation terms
              will be outlined in the project agreement.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">
              Changes to These Terms
            </h2>
            <p>
              These terms may be updated from time to time. The latest version
              will always be available on this page. Ongoing projects will
              continue under the terms agreed at the time of engagement.
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="font-display text-xl font-semibold mb-3">
              Disclaimer
            </h2>
            <p className="text-muted-foreground text-sm">
              This page is for informational purposes only and does not
              constitute legal advice or a binding legal contract. For
              questions, contact me at{" "}
              <a
                href="mailto:romanzakharenko.r@gmail.com"
                className="text-primary hover:underline"
              >
                romanzakharenko.r@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Terms;
