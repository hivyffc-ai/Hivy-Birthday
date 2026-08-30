import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "midnight-birthday-surprise-in-july-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Midnight Birthday Surprise July Surat | Seasonal Romantic",
  description: keyword?.metaDescription || "Plan a midnight birthday surprise in July in Surat. Romantic couple setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/midnight-birthday-surprise-in-july-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Midnight Birthday Surprise July Surat | Seasonal Romantic",
    description: keyword?.metaDescription || "Plan a midnight birthday surprise in July in Surat. Romantic couple setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/midnight-birthday-surprise-in-july-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
