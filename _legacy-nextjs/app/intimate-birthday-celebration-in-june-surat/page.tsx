import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "intimate-birthday-celebration-in-june-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Intimate Birthday Celebration June Surat | Seasonal",
  description: keyword?.metaDescription || "Book a intimate birthday celebration in June in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/intimate-birthday-celebration-in-june-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Intimate Birthday Celebration June Surat | Seasonal",
    description: keyword?.metaDescription || "Book a intimate birthday celebration in June in Surat. Private romantic setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/intimate-birthday-celebration-in-june-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
