import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "40th-birthday-karwa-chauth-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "40th Birthday Karwa Chauth Surat | Special Couple Celebration",
  description: keyword?.metaDescription || "Celebrate your 40th birthday on Karwa Chauth in Surat. Special couple setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/40th-birthday-karwa-chauth-surat" },
  openGraph: {
    title: keyword?.metaTitle || "40th Birthday Karwa Chauth Surat | Special Couple Celebration",
    description: keyword?.metaDescription || "Celebrate your 40th birthday on Karwa Chauth in Surat. Special couple setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/40th-birthday-karwa-chauth-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
