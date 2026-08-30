import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "45th-birthday-new-year-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "45th Birthday New Year Surat | Special Couple Celebration",
  description: keyword?.metaDescription || "Celebrate your 45th birthday on New Year in Surat. Special couple setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/45th-birthday-new-year-surat" },
  openGraph: {
    title: keyword?.metaTitle || "45th Birthday New Year Surat | Special Couple Celebration",
    description: keyword?.metaDescription || "Celebrate your 45th birthday on New Year in Surat. Special couple setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/45th-birthday-new-year-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
