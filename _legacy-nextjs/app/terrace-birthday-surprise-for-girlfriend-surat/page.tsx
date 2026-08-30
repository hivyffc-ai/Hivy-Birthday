import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "terrace-birthday-surprise-for-girlfriend-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Terrace Birthday Surprise For Girlfriend Surat | Private Setup",
  description: keyword?.metaDescription || "Book a terrace birthday surprise for girlfriend in Surat. Private romantic experience at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/terrace-birthday-surprise-for-girlfriend-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Terrace Birthday Surprise For Girlfriend Surat | Private Setup",
    description: keyword?.metaDescription || "Book a terrace birthday surprise for girlfriend in Surat. Private romantic experience at HIVY.",
    url: "https://birthdaysurprisesurat.com/terrace-birthday-surprise-for-girlfriend-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
