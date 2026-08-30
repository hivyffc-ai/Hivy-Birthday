import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "romantic-birthday-celebration-in-january-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Romantic Birthday Celebration January Surat | Seasonal",
  description: keyword?.metaDescription || "Book a romantic birthday celebration in January in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/romantic-birthday-celebration-in-january-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Romantic Birthday Celebration January Surat | Seasonal",
    description: keyword?.metaDescription || "Book a romantic birthday celebration in January in Surat. Private romantic setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/romantic-birthday-celebration-in-january-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
