import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "48th-birthday-surprise-for-fiance-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "48th Birthday Surprise For Fiance Surat | Romantic Private Setup",
  description: keyword?.metaDescription || "Plan a 48th birthday surprise for your fiance in Surat. Private candlelight setup & decorations at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/48th-birthday-surprise-for-fiance-surat" },
  openGraph: {
    title: keyword?.metaTitle || "48th Birthday Surprise For Fiance Surat | Romantic Private Setup",
    description: keyword?.metaDescription || "Plan a 48th birthday surprise for your fiance in Surat. Private candlelight setup & decorations at HIVY.",
    url: "https://birthdaysurprisesurat.com/48th-birthday-surprise-for-fiance-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
