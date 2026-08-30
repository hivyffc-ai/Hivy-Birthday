import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "27th-birthday-surprise-for-better-half-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "27th Birthday Surprise For Better Half Surat | Romantic Private Setup",
  description: keyword?.metaDescription || "Plan a 27th birthday surprise for your better-half in Surat. Private candlelight setup & decorations at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/27th-birthday-surprise-for-better-half-surat" },
  openGraph: {
    title: keyword?.metaTitle || "27th Birthday Surprise For Better Half Surat | Romantic Private Setup",
    description: keyword?.metaDescription || "Plan a 27th birthday surprise for your better-half in Surat. Private candlelight setup & decorations at HIVY.",
    url: "https://birthdaysurprisesurat.com/27th-birthday-surprise-for-better-half-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
