import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactChannels from "@/components/ContactChannels";
import ContactForm from "@/components/ContactForm";
import { getServices } from "@/lib/store";

export const metadata: Metadata = {
  title: "Contact Nova Agency | Get a Digital Project Quote",
  description:
    "Tell us about your project. Reach Nova Agency, a digital agency in Pakistan, via WhatsApp, Instagram DM or our contact form for a customized quote.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage() {
  const services = await getServices();

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's Build Something Amazing."
        description="Have an idea, project or business goal in mind? Tell us about it and let's explore how Nova can help."
      />

      <section className="py-24 sm:py-32">
        <div className="container-nova">
          <ContactChannels />

          <div className="reveal mx-auto mt-16 max-w-3xl rounded-3xl border border-navy-2/8 bg-surface p-8 shadow-[0_1px_2px_rgba(0,0,0,0.2)] sm:p-12">
            <ContactForm services={services} />
          </div>
        </div>
      </section>
    </>
  );
}
