import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "rooftop-birthday-dinner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Rooftop Birthday Dinner Surat | Couples Only",
  description: keyword?.metaDescription || "Experience a rooftop birthday dinner in Surat designed exclusively for couples. Book at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/rooftop-birthday-dinner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Rooftop Birthday Dinner Surat | Couples Only",
    description: keyword?.metaDescription || "Experience a rooftop birthday dinner in Surat designed exclusively for couples. Book at HIVY.",
    url: "https://birthdaysurprisesurat.com/rooftop-birthday-dinner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
