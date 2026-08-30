import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "birthday-date-night-couple-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Birthday Date Night Couples Surat | Romantic Evening",
  description: keyword?.metaDescription || "Plan a birthday date night for couples in Surat. Romantic private evening at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/birthday-date-night-couple-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Birthday Date Night Couples Surat | Romantic Evening",
    description: keyword?.metaDescription || "Plan a birthday date night for couples in Surat. Romantic private evening at HIVY.",
    url: "https://birthdaysurprisesurat.com/birthday-date-night-couple-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
