import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "february-birthday-surprise-for-wife-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "February Birthday Surprise For Wife Surat | Seasonal Romantic",
  description: keyword?.metaDescription || "Plan a February birthday surprise for your wife in Surat. Seasonal romantic setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/february-birthday-surprise-for-wife-surat" },
  openGraph: {
    title: keyword?.metaTitle || "February Birthday Surprise For Wife Surat | Seasonal Romantic",
    description: keyword?.metaDescription || "Plan a February birthday surprise for your wife in Surat. Seasonal romantic setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/february-birthday-surprise-for-wife-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
