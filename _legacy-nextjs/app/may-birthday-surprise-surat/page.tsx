import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "may-birthday-surprise-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "May Birthday Surprise Surat | Romantic Couple Celebration",
  description: keyword?.metaDescription || "Plan a May birthday surprise in Surat. Romantic private setup for couples at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/may-birthday-surprise-surat" },
  openGraph: {
    title: keyword?.metaTitle || "May Birthday Surprise Surat | Romantic Couple Celebration",
    description: keyword?.metaDescription || "Plan a May birthday surprise in Surat. Romantic private setup for couples at HIVY.",
    url: "https://birthdaysurprisesurat.com/may-birthday-surprise-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
