import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "romantic-birthday-surprise-in-january-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Romantic Birthday Surprise January Surat | Seasonal Romantic",
  description: keyword?.metaDescription || "Plan a romantic birthday surprise in January in Surat. Romantic couple setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/romantic-birthday-surprise-in-january-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Romantic Birthday Surprise January Surat | Seasonal Romantic",
    description: keyword?.metaDescription || "Plan a romantic birthday surprise in January in Surat. Romantic couple setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/romantic-birthday-surprise-in-january-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
