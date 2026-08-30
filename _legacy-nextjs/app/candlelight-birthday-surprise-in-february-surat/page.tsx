import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "candlelight-birthday-surprise-in-february-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Candlelight Birthday Surprise February Surat | Seasonal Romantic",
  description: keyword?.metaDescription || "Plan a candlelight birthday surprise in February in Surat. Romantic couple setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/candlelight-birthday-surprise-in-february-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Candlelight Birthday Surprise February Surat | Seasonal Romantic",
    description: keyword?.metaDescription || "Plan a candlelight birthday surprise in February in Surat. Romantic couple setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/candlelight-birthday-surprise-in-february-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
