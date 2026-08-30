import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "birthday-date-at-rooftop-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Birthday Date At Rooftop Surat | Couple Experience",
  description: keyword?.metaDescription || "Plan a birthday date at rooftop in Surat. Private couple experience at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/birthday-date-at-rooftop-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Birthday Date At Rooftop Surat | Couple Experience",
    description: keyword?.metaDescription || "Plan a birthday date at rooftop in Surat. Private couple experience at HIVY.",
    url: "https://birthdaysurprisesurat.com/birthday-date-at-rooftop-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
