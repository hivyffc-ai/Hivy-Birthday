import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "22th-birthday-surprise-for-soulmate-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "22th Birthday Surprise For Soulmate Surat | Romantic Private Setup",
  description: keyword?.metaDescription || "Plan a 22th birthday surprise for your soulmate in Surat. Private candlelight setup & decorations at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/22th-birthday-surprise-for-soulmate-surat" },
  openGraph: {
    title: keyword?.metaTitle || "22th Birthday Surprise For Soulmate Surat | Romantic Private Setup",
    description: keyword?.metaDescription || "Plan a 22th birthday surprise for your soulmate in Surat. Private candlelight setup & decorations at HIVY.",
    url: "https://birthdaysurprisesurat.com/22th-birthday-surprise-for-soulmate-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
