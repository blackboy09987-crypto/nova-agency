import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms & Conditions | Nova Agency",
  description: "The terms that govern use of the Nova Agency website and services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms & Conditions" />
      <section className="py-24 sm:py-32">
        <div className="container-nova mx-auto max-w-2xl">
          <div className="reveal flex flex-col gap-6 text-[15px] leading-relaxed text-navy-2/80">
            <p>
              By using this website, you agree to the following terms. If you
              do not agree, please discontinue use of the site.
            </p>
            <div>
              <h2 className="mb-2 font-display text-lg font-bold text-navy-2">
                Services
              </h2>
              <p>
                Any service engagement with Nova Agency is subject to a
                separate agreement covering scope, timeline, deliverables and
                pricing, confirmed directly with you before work begins.
              </p>
            </div>
            <div>
              <h2 className="mb-2 font-display text-lg font-bold text-navy-2">
                Content
              </h2>
              <p>
                All content on this website — including text, graphics and
                the Nova Agency name and logo — belongs to Nova Agency unless
                otherwise stated, and may not be reproduced without
                permission.
              </p>
            </div>
            <div>
              <h2 className="mb-2 font-display text-lg font-bold text-navy-2">
                Contact
              </h2>
              <p>
                Questions about these terms can be sent to{" "}
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
