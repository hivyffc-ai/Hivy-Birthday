import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "indoor-birthday-surprise-for-wife-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Indoor Birthday Surprise For Wife Surat | Private Setup",
  description: keyword?.metaDescription || "Book a indoor birthday surprise for wife in Surat. Private romantic experience at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/indoor-birthday-surprise-for-wife-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Indoor Birthday Surprise For Wife Surat | Private Setup",
    description: keyword?.metaDescription || "Book a indoor birthday surprise for wife in Surat. Private romantic experience at HIVY.",
    url: "https://birthdaysurprisesurat.com/indoor-birthday-surprise-for-wife-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
