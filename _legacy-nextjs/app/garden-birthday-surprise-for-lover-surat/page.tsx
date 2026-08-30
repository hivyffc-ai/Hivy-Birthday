import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "garden-birthday-surprise-for-lover-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Garden Birthday Surprise For Lover Surat | Private Setup",
  description: keyword?.metaDescription || "Book a garden birthday surprise for lover in Surat. Private romantic experience at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/garden-birthday-surprise-for-lover-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Garden Birthday Surprise For Lover Surat | Private Setup",
    description: keyword?.metaDescription || "Book a garden birthday surprise for lover in Surat. Private romantic experience at HIVY.",
    url: "https://birthdaysurprisesurat.com/garden-birthday-surprise-for-lover-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
