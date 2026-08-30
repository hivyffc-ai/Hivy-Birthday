import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "midnight-birthday-surprise-for-better-half-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Midnight Birthday Surprise For Better Half Surat | Private Setup",
  description: keyword?.metaDescription || "Book a midnight birthday surprise for your better-half in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/midnight-birthday-surprise-for-better-half-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Midnight Birthday Surprise For Better Half Surat | Private Setup",
    description: keyword?.metaDescription || "Book a midnight birthday surprise for your better-half in Surat. Private romantic setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/midnight-birthday-surprise-for-better-half-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
