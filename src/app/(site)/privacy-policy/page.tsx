import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy | Nova Agency",
  description: "How Nova Agency collects, uses and protects your information.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <section className="py-24 sm:py-32">
        <div className="container-nova mx-auto max-w-2xl">
          <div className="reveal flex flex-col gap-6 text-[15px] leading-relaxed text-navy-2/80">
            <p>
              This Privacy Policy explains how Nova Agency (&quot;we&quot;,
              &quot;us&quot;) handles information you share with us through
              this website, including via our contact form, WhatsApp or
              Instagram.
            </p>
            <div>
              <h2 className="mb-2 font-display text-lg font-bold text-navy-2">
                Information We Collect
              </h2>
              <p>
                When you submit our contact form or message us directly, we
                receive the details you choose to share — such as your name,
                email, WhatsApp number, company name and project details.
              </p>
            </div>
            <div>
              <h2 className="mb-2 font-display text-lg font-bold text-navy-2">
                How We Use It
              </h2>
              <p>
                We use this information solely to respond to your inquiry,
                discuss your project and provide a quote. We do not sell your
                information to third parties.
              </p>
            </div>
            <div>
              <h2 className="mb-2 font-display text-lg font-bold text-navy-2">
                Contact
              </h2>
              <p>
                Questions about this policy can be sent to{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-blue underline">
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
