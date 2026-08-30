import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "june-birthday-surprise-for-wife-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "June Birthday Surprise For Wife Surat | Seasonal Romantic",
  description: keyword?.metaDescription || "Plan a June birthday surprise for your wife in Surat. Seasonal romantic setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/june-birthday-surprise-for-wife-surat" },
  openGraph: {
    title: keyword?.metaTitle || "June Birthday Surprise For Wife Surat | Seasonal Romantic",
    description: keyword?.metaDescription || "Plan a June birthday surprise for your wife in Surat. Seasonal romantic setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/june-birthday-surprise-for-wife-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
