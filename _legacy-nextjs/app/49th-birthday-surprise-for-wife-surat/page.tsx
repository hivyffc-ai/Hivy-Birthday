import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "49th-birthday-surprise-for-wife-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "49th Birthday Surprise For Wife Surat | Romantic Private Setup",
  description: keyword?.metaDescription || "Plan a 49th birthday surprise for your wife in Surat. Private candlelight setup & decorations at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/49th-birthday-surprise-for-wife-surat" },
  openGraph: {
    title: keyword?.metaTitle || "49th Birthday Surprise For Wife Surat | Romantic Private Setup",
    description: keyword?.metaDescription || "Plan a 49th birthday surprise for your wife in Surat. Private candlelight setup & decorations at HIVY.",
    url: "https://birthdaysurprisesurat.com/49th-birthday-surprise-for-wife-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
