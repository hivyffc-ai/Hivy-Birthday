import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "july-birthday-surprise-for-fiancee-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "July Birthday Surprise For Fiancee Surat | Seasonal Romantic",
  description: keyword?.metaDescription || "Plan a July birthday surprise for your fiancee in Surat. Seasonal romantic setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/july-birthday-surprise-for-fiancee-surat" },
  openGraph: {
    title: keyword?.metaTitle || "July Birthday Surprise For Fiancee Surat | Seasonal Romantic",
    description: keyword?.metaDescription || "Plan a July birthday surprise for your fiancee in Surat. Seasonal romantic setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/july-birthday-surprise-for-fiancee-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
