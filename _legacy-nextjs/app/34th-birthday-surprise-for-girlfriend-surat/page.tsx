import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "34th-birthday-surprise-for-girlfriend-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "34th Birthday Surprise For Girlfriend Surat | Romantic Private Setup",
  description: keyword?.metaDescription || "Plan a 34th birthday surprise for your girlfriend in Surat. Private candlelight setup & decorations at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/34th-birthday-surprise-for-girlfriend-surat" },
  openGraph: {
    title: keyword?.metaTitle || "34th Birthday Surprise For Girlfriend Surat | Romantic Private Setup",
    description: keyword?.metaDescription || "Plan a 34th birthday surprise for your girlfriend in Surat. Private candlelight setup & decorations at HIVY.",
    url: "https://birthdaysurprisesurat.com/34th-birthday-surprise-for-girlfriend-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
