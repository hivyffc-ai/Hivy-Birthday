import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "24th-birthday-surprise-for-partner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "24th Birthday Surprise For Partner Surat | Romantic Private Setup",
  description: keyword?.metaDescription || "Plan a 24th birthday surprise for your partner in Surat. Private candlelight setup & decorations at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/24th-birthday-surprise-for-partner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "24th Birthday Surprise For Partner Surat | Romantic Private Setup",
    description: keyword?.metaDescription || "Plan a 24th birthday surprise for your partner in Surat. Private candlelight setup & decorations at HIVY.",
    url: "https://birthdaysurprisesurat.com/24th-birthday-surprise-for-partner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
