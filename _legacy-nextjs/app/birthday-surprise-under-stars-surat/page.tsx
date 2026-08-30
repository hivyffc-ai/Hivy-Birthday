import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "birthday-surprise-under-stars-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Birthday Surprise Under Stars Surat | Exclusive Couple Venue",
  description: keyword?.metaDescription || "Celebrate birthday under stars in Surat. Exclusive private setup for couples at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/birthday-surprise-under-stars-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Birthday Surprise Under Stars Surat | Exclusive Couple Venue",
    description: keyword?.metaDescription || "Celebrate birthday under stars in Surat. Exclusive private setup for couples at HIVY.",
    url: "https://birthdaysurprisesurat.com/birthday-surprise-under-stars-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
