import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "birthday-celebration-for-partner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Birthday Celebration For Partner Surat | Romantic Couple Setup",
  description: keyword?.metaDescription || "Plan a birthday celebration for your partner in Surat. Candlelight, cake & private setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/birthday-celebration-for-partner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Birthday Celebration For Partner Surat | Romantic Couple Setup",
    description: keyword?.metaDescription || "Plan a birthday celebration for your partner in Surat. Candlelight, cake & private setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/birthday-celebration-for-partner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
