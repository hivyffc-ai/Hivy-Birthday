import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "april-birthday-surprise-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "April Birthday Surprise Surat | Romantic Couple Celebration",
  description: keyword?.metaDescription || "Plan a April birthday surprise in Surat. Romantic private setup for couples at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/april-birthday-surprise-surat" },
  openGraph: {
    title: keyword?.metaTitle || "April Birthday Surprise Surat | Romantic Couple Celebration",
    description: keyword?.metaDescription || "Plan a April birthday surprise in Surat. Romantic private setup for couples at HIVY.",
    url: "https://birthdaysurprisesurat.com/april-birthday-surprise-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
