import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "birthday-surprise-in-february-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Birthday Surprise in February Surat | Seasonal Romantic Celebration",
  description: keyword?.metaDescription || "Book birthday surprise in February in Surat. Special seasonal romantic setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/birthday-surprise-in-february-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Birthday Surprise in February Surat | Seasonal Romantic Celebration",
    description: keyword?.metaDescription || "Book birthday surprise in February in Surat. Special seasonal romantic setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/birthday-surprise-in-february-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
