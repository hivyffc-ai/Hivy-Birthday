import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "luxury-birthday-surprise-in-march-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Luxury Birthday Surprise March Surat | Seasonal Romantic",
  description: keyword?.metaDescription || "Plan a luxury birthday surprise in March in Surat. Romantic couple setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/luxury-birthday-surprise-in-march-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Luxury Birthday Surprise March Surat | Seasonal Romantic",
    description: keyword?.metaDescription || "Plan a luxury birthday surprise in March in Surat. Romantic couple setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/luxury-birthday-surprise-in-march-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
