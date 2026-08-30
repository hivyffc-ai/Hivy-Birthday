import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "23th-birthday-surprise-for-boyfriend-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "23th Birthday Surprise For Boyfriend Surat | Romantic Private Setup",
  description: keyword?.metaDescription || "Plan a 23th birthday surprise for your boyfriend in Surat. Private candlelight setup & decorations at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/23th-birthday-surprise-for-boyfriend-surat" },
  openGraph: {
    title: keyword?.metaTitle || "23th Birthday Surprise For Boyfriend Surat | Romantic Private Setup",
    description: keyword?.metaDescription || "Plan a 23th birthday surprise for your boyfriend in Surat. Private candlelight setup & decorations at HIVY.",
    url: "https://birthdaysurprisesurat.com/23th-birthday-surprise-for-boyfriend-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
