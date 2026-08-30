import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "45th-birthday-holi-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "45th Birthday Holi Surat | Special Couple Celebration",
  description: keyword?.metaDescription || "Celebrate your 45th birthday on Holi in Surat. Special couple setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/45th-birthday-holi-surat" },
  openGraph: {
    title: keyword?.metaTitle || "45th Birthday Holi Surat | Special Couple Celebration",
    description: keyword?.metaDescription || "Celebrate your 45th birthday on Holi in Surat. Special couple setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/45th-birthday-holi-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
