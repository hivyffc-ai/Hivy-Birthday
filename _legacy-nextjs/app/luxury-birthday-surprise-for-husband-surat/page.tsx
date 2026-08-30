import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "luxury-birthday-surprise-for-husband-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Luxury Birthday Surprise For Husband Surat | Private Setup",
  description: keyword?.metaDescription || "Book a luxury birthday surprise for your husband in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/luxury-birthday-surprise-for-husband-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Luxury Birthday Surprise For Husband Surat | Private Setup",
    description: keyword?.metaDescription || "Book a luxury birthday surprise for your husband in Surat. Private romantic setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/luxury-birthday-surprise-for-husband-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
