import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "23th-birthday-celebration-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "23th Birthday Celebration Surat | Romantic Couple Surprise",
  description: keyword?.metaDescription || "Plan a magical 23th birthday celebration in Surat for your partner. Private romantic setup, cake & decorations at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/23th-birthday-celebration-surat" },
  openGraph: {
    title: keyword?.metaTitle || "23th Birthday Celebration Surat | Romantic Couple Surprise",
    description: keyword?.metaDescription || "Plan a magical 23th birthday celebration in Surat for your partner. Private romantic setup, cake & decorations at HIVY.",
    url: "https://birthdaysurprisesurat.com/23th-birthday-celebration-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
