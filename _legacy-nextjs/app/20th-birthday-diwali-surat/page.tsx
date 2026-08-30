import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "20th-birthday-diwali-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "20th Birthday Diwali Surat | Special Couple Celebration",
  description: keyword?.metaDescription || "Celebrate your 20th birthday on Diwali in Surat. Special couple setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/20th-birthday-diwali-surat" },
  openGraph: {
    title: keyword?.metaTitle || "20th Birthday Diwali Surat | Special Couple Celebration",
    description: keyword?.metaDescription || "Celebrate your 20th birthday on Diwali in Surat. Special couple setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/20th-birthday-diwali-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
