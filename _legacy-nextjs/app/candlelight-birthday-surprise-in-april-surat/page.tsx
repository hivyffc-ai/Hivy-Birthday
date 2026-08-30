import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "candlelight-birthday-surprise-in-april-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Candlelight Birthday Surprise April Surat | Seasonal Romantic",
  description: keyword?.metaDescription || "Plan a candlelight birthday surprise in April in Surat. Romantic couple setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/candlelight-birthday-surprise-in-april-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Candlelight Birthday Surprise April Surat | Seasonal Romantic",
    description: keyword?.metaDescription || "Plan a candlelight birthday surprise in April in Surat. Romantic couple setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/candlelight-birthday-surprise-in-april-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
