import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "romantic-birthday-surprise-for-fiance-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Romantic Birthday Surprise For Fiance Surat | Private Setup",
  description: keyword?.metaDescription || "Book a romantic birthday surprise for your fiance in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/romantic-birthday-surprise-for-fiance-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Romantic Birthday Surprise For Fiance Surat | Private Setup",
    description: keyword?.metaDescription || "Book a romantic birthday surprise for your fiance in Surat. Private romantic setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/romantic-birthday-surprise-for-fiance-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
