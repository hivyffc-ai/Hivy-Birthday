import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "private-birthday-surprise-in-august-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Private Birthday Surprise August Surat | Seasonal Romantic",
  description: keyword?.metaDescription || "Plan a private birthday surprise in August in Surat. Romantic couple setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/private-birthday-surprise-in-august-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Private Birthday Surprise August Surat | Seasonal Romantic",
    description: keyword?.metaDescription || "Plan a private birthday surprise in August in Surat. Romantic couple setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/private-birthday-surprise-in-august-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
