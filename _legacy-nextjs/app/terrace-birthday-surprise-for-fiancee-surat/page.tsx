import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "terrace-birthday-surprise-for-fiancee-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Terrace Birthday Surprise For Fiancee Surat | Private Setup",
  description: keyword?.metaDescription || "Book a terrace birthday surprise for fiancee in Surat. Private romantic experience at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/terrace-birthday-surprise-for-fiancee-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Terrace Birthday Surprise For Fiancee Surat | Private Setup",
    description: keyword?.metaDescription || "Book a terrace birthday surprise for fiancee in Surat. Private romantic experience at HIVY.",
    url: "https://birthdaysurprisesurat.com/terrace-birthday-surprise-for-fiancee-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
