import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "birthday-dinner-for-boyfriend-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Birthday Dinner For Boyfriend Surat | Romantic Couple Setup",
  description: keyword?.metaDescription || "Plan a birthday dinner for your boyfriend in Surat. Candlelight, cake & private setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/birthday-dinner-for-boyfriend-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Birthday Dinner For Boyfriend Surat | Romantic Couple Setup",
    description: keyword?.metaDescription || "Plan a birthday dinner for your boyfriend in Surat. Candlelight, cake & private setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/birthday-dinner-for-boyfriend-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
