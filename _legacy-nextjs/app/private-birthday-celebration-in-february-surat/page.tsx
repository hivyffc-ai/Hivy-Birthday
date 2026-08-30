import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "private-birthday-celebration-in-february-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Private Birthday Celebration February Surat | Seasonal",
  description: keyword?.metaDescription || "Book a private birthday celebration in February in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/private-birthday-celebration-in-february-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Private Birthday Celebration February Surat | Seasonal",
    description: keyword?.metaDescription || "Book a private birthday celebration in February in Surat. Private romantic setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/private-birthday-celebration-in-february-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
