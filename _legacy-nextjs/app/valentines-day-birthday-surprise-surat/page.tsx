import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "valentines-day-birthday-surprise-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Valentines Day Birthday Surprise Surat | Festive Special",
  description: keyword?.metaDescription || "Combine valentines day with a birthday surprise in Surat. Special festive romantic setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/valentines-day-birthday-surprise-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Valentines Day Birthday Surprise Surat | Festive Special",
    description: keyword?.metaDescription || "Combine valentines day with a birthday surprise in Surat. Special festive romantic setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/valentines-day-birthday-surprise-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
