import { RevealOnScroll } from "../RevealOnScroll";

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-xl font-bold text-white mb-3">{title}</h2>
    <div className="text-gray-300 space-y-2 leading-relaxed">{children}</div>
  </div>
);

export const TermsOfService = () => {
  return (
    <div className="min-h-screen py-24 px-4">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-gray-500 text-sm mb-10">
            Last updated: June 2025 &nbsp;·&nbsp; Toby's Commissions
          </p>

          <div className="p-6 rounded-xl border border-white/10 mb-8 bg-blue-500/5">
            <p className="text-gray-300 text-sm leading-relaxed">
              By hiring Toby ("Developer") for any commission or scripting
              project, you ("Client") agree to the following Terms of Service in
              full. These terms govern all work agreed upon between the Developer
              and the Client. If you do not agree to these terms, do not proceed
              with the commission.
            </p>
          </div>

          <Section title="1. Scope of Work">
            <p>
              All deliverables will be outlined and agreed upon before work
              begins. Any features, systems, or changes not included in the
              original agreement constitute a new or expanded scope and may
              require additional payment and timeline adjustment.
            </p>
            <p>
              The Developer reserves the right to decline any commission request
              for any reason, including but not limited to ethical concerns,
              capacity, or project feasibility.
            </p>
          </Section>

          <Section title="2. Payment">
            <p>
              Payment terms (upfront, milestone-based, or upon delivery) will be
              established prior to the start of any project. The Developer
              requires at least a partial upfront payment for all commissions
              unless otherwise agreed in writing.
            </p>
            <p>
              All payments are final and non-refundable once work has begun,
              except in the case where the Developer is unable to deliver the
              agreed-upon scope.
            </p>
            <p>
              Accepted payment methods will be communicated at the time of
              agreement. The Developer is not responsible for any fees imposed
              by the payment platform.
            </p>
          </Section>

          <Section title="3. Revisions">
            <p>
              Minor revisions and bug fixes directly related to the agreed scope
              are included at no additional cost within 7 days of final
              delivery.
            </p>
            <p>
              Revisions that expand the original scope, or requests made after
              the 7-day window, may be billed at the Developer's standard rate.
              The number of included revision rounds will be specified in the
              commission agreement.
            </p>
          </Section>

          <Section title="4. Timeline & Delivery">
            <p>
              Estimated delivery timelines are provided in good faith but are
              not guaranteed unless explicitly stated in writing. Timelines may
              be affected by scope changes, delayed Client feedback, or
              unforeseen circumstances.
            </p>
            <p>
              The Client agrees to provide necessary assets, access, and
              feedback in a timely manner. Delays caused by the Client do not
              constitute a breach by the Developer.
            </p>
          </Section>

          <Section title="5. Intellectual Property">
            <p>
              Upon receipt of full payment, the Client is granted full ownership
              and rights to use the delivered scripts and systems within their
              Roblox game(s).
            </p>
            <p>
              The Developer retains the right to display completed work (e.g.,
              videos, screenshots, descriptions) in their portfolio unless the
              Client requests confidentiality in writing before the project
              begins.
            </p>
            <p>
              The Developer does not grant the Client the right to resell,
              redistribute, or claim authorship of the delivered scripts as
              their own original work.
            </p>
          </Section>

          <Section title="6. Confidentiality">
            <p>
              The Developer will not publicly disclose sensitive project details
              (e.g., unreleased game concepts, proprietary mechanics) if the
              Client explicitly requests confidentiality before work begins.
            </p>
            <p>
              Any non-disclosure agreement (NDA) requested by the Client must be
              agreed to in writing prior to the commencement of work.
            </p>
          </Section>

          <Section title="7. Chargebacks & Disputes">
            <p>
              Filing a chargeback or payment dispute outside of a mutually
              agreed resolution process is a violation of these Terms. The
              Developer reserves the right to pursue recovery of owed funds and
              to publicly document fraudulent chargeback attempts.
            </p>
            <p>
              If a dispute arises, the Client agrees to contact the Developer
              directly first to seek resolution before escalating to a payment
              platform or third party.
            </p>
          </Section>

          <Section title="8. Limitation of Liability">
            <p>
              The Developer is not liable for any indirect, incidental, or
              consequential damages arising from the use of delivered scripts,
              including but not limited to game bans, data loss, or revenue
              loss.
            </p>
            <p>
              Delivered scripts are tested and functional at the time of
              delivery. The Developer is not responsible for breakage caused by
              Roblox engine updates, third-party plugin conflicts, or
              Client-side modifications made after delivery.
            </p>
          </Section>

          <Section title="9. Prohibited Use">
            <p>
              Scripts and systems delivered by the Developer must not be used
              to exploit, cheat, harass, or otherwise violate Roblox's Terms of
              Service or Community Standards. Discovery of such use voids any
              obligations by the Developer and may result in public
              documentation of the violation.
            </p>
          </Section>

          <Section title="10. Amendments">
            <p>
              These Terms of Service may be updated at any time. The version in
              effect at the time a commission agreement is reached governs that
              engagement. Continued engagement with the Developer after an
              update constitutes acceptance of the revised terms.
            </p>
          </Section>

          <div className="mt-10 p-6 rounded-xl border border-white/10 bg-blue-500/5">
            <p className="text-gray-400 text-sm">
              Questions about these terms? Reach out via{" "}
              <a
                href="mailto:tobyscommissions22@gmail.com"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                tobyscommissions22@gmail.com
              </a>{" "}
              or Discord:{" "}
              <span className="text-blue-400">tobys01</span>.
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
};
