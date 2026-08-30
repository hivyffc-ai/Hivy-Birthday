import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "rooftop-birthday-surprise-for-fiance-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Rooftop Birthday Surprise For Fiance Surat | Private Setup",
  description: keyword?.metaDescription || "Book a rooftop birthday surprise for fiance in Surat. Private romantic experience at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/rooftop-birthday-surprise-for-fiance-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Rooftop Birthday Surprise For Fiance Surat | Private Setup",
    description: keyword?.metaDescription || "Book a rooftop birthday surprise for fiance in Surat. Private romantic experience at HIVY.",
    url: "https://birthdaysurprisesurat.com/rooftop-birthday-surprise-for-fiance-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
