import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "march-birthday-surprise-for-husband-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "March Birthday Surprise For Husband Surat | Seasonal Romantic",
  description: keyword?.metaDescription || "Plan a March birthday surprise for your husband in Surat. Seasonal romantic setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/march-birthday-surprise-for-husband-surat" },
  openGraph: {
    title: keyword?.metaTitle || "March Birthday Surprise For Husband Surat | Seasonal Romantic",
    description: keyword?.metaDescription || "Plan a March birthday surprise for your husband in Surat. Seasonal romantic setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/march-birthday-surprise-for-husband-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
