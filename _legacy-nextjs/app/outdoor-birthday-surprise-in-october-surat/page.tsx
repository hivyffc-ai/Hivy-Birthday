import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "outdoor-birthday-surprise-in-october-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Outdoor Birthday Surprise October Surat | Seasonal Romantic",
  description: keyword?.metaDescription || "Plan a outdoor birthday surprise in October in Surat. Romantic couple setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/outdoor-birthday-surprise-in-october-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Outdoor Birthday Surprise October Surat | Seasonal Romantic",
    description: keyword?.metaDescription || "Plan a outdoor birthday surprise in October in Surat. Romantic couple setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/outdoor-birthday-surprise-in-october-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
