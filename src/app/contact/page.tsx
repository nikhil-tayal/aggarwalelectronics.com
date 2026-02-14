import { site } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: `Contact ${site.name} for product enquiries and support.`,
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto max-w-2xl px-4 md:px-6">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Contact Us
        </h1>
        <p className="mt-3 text-muted-foreground">
          Get in touch for product enquiries, bulk orders, or expert guidance.
        </p>

        <div className="mt-10 space-y-8">
          <div>
            <h2 className="text-sm font-medium text-foreground">Address</h2>
            <p className="mt-1 text-muted-foreground">{site.contact.address}</p>
          </div>
          <div>
            <h2 className="text-sm font-medium text-foreground">Phone</h2>
            <p className="mt-1 text-muted-foreground">
              <a
                href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                className="hover:text-foreground underline underline-offset-4"
              >
                {site.contact.phone}
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-sm font-medium text-foreground">Email</h2>
            <p className="mt-1 text-muted-foreground">
              <a
                href={`mailto:${site.contact.email}`}
                className="hover:text-foreground underline underline-offset-4"
              >
                {site.contact.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
