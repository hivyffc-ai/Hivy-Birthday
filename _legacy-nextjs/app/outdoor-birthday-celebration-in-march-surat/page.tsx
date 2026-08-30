import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "outdoor-birthday-celebration-in-march-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Outdoor Birthday Celebration March Surat | Seasonal",
  description: keyword?.metaDescription || "Book a outdoor birthday celebration in March in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/outdoor-birthday-celebration-in-march-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Outdoor Birthday Celebration March Surat | Seasonal",
    description: keyword?.metaDescription || "Book a outdoor birthday celebration in March in Surat. Private romantic setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/outdoor-birthday-celebration-in-march-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
