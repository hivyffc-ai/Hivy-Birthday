import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "romantic-birthday-surprise-in-june-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Romantic Birthday Surprise June Surat | Seasonal Romantic",
  description: keyword?.metaDescription || "Plan a romantic birthday surprise in June in Surat. Romantic couple setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/romantic-birthday-surprise-in-june-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Romantic Birthday Surprise June Surat | Seasonal Romantic",
    description: keyword?.metaDescription || "Plan a romantic birthday surprise in June in Surat. Romantic couple setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/romantic-birthday-surprise-in-june-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
