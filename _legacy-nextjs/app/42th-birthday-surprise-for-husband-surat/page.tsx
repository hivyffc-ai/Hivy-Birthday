import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "42th-birthday-surprise-for-husband-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "42th Birthday Surprise For Husband Surat | Romantic Private Setup",
  description: keyword?.metaDescription || "Plan a 42th birthday surprise for your husband in Surat. Private candlelight setup & decorations at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/42th-birthday-surprise-for-husband-surat" },
  openGraph: {
    title: keyword?.metaTitle || "42th Birthday Surprise For Husband Surat | Romantic Private Setup",
    description: keyword?.metaDescription || "Plan a 42th birthday surprise for your husband in Surat. Private candlelight setup & decorations at HIVY.",
    url: "https://birthdaysurprisesurat.com/42th-birthday-surprise-for-husband-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
