import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "luxury-birthday-celebration-in-may-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Luxury Birthday Celebration May Surat | Seasonal",
  description: keyword?.metaDescription || "Book a luxury birthday celebration in May in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/luxury-birthday-celebration-in-may-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Luxury Birthday Celebration May Surat | Seasonal",
    description: keyword?.metaDescription || "Book a luxury birthday celebration in May in Surat. Private romantic setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/luxury-birthday-celebration-in-may-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
