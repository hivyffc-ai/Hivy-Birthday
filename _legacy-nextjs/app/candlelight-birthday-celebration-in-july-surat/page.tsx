import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "candlelight-birthday-celebration-in-july-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Candlelight Birthday Celebration July Surat | Seasonal",
  description: keyword?.metaDescription || "Book a candlelight birthday celebration in July in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/candlelight-birthday-celebration-in-july-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Candlelight Birthday Celebration July Surat | Seasonal",
    description: keyword?.metaDescription || "Book a candlelight birthday celebration in July in Surat. Private romantic setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/candlelight-birthday-celebration-in-july-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
