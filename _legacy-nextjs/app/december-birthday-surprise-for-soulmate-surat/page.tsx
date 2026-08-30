import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "december-birthday-surprise-for-soulmate-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "December Birthday Surprise For Soulmate Surat | Seasonal Romantic",
  description: keyword?.metaDescription || "Plan a December birthday surprise for your soulmate in Surat. Seasonal romantic setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/december-birthday-surprise-for-soulmate-surat" },
  openGraph: {
    title: keyword?.metaTitle || "December Birthday Surprise For Soulmate Surat | Seasonal Romantic",
    description: keyword?.metaDescription || "Plan a December birthday surprise for your soulmate in Surat. Seasonal romantic setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/december-birthday-surprise-for-soulmate-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
