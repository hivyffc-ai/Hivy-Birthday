import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "birthday-surprise-at-rooftop-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Birthday Surprise At Rooftop Surat | Exclusive Couple Venue",
  description: keyword?.metaDescription || "Celebrate birthday at rooftop in Surat. Exclusive private setup for couples at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/birthday-surprise-at-rooftop-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Birthday Surprise At Rooftop Surat | Exclusive Couple Venue",
    description: keyword?.metaDescription || "Celebrate birthday at rooftop in Surat. Exclusive private setup for couples at HIVY.",
    url: "https://birthdaysurprisesurat.com/birthday-surprise-at-rooftop-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
