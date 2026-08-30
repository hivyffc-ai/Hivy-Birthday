import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "22th-birthday-anniversary-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "22th Birthday Anniversary Surat | Special Couple Celebration",
  description: keyword?.metaDescription || "Celebrate your 22th birthday on Anniversary in Surat. Special couple setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/22th-birthday-anniversary-surat" },
  openGraph: {
    title: keyword?.metaTitle || "22th Birthday Anniversary Surat | Special Couple Celebration",
    description: keyword?.metaDescription || "Celebrate your 22th birthday on Anniversary in Surat. Special couple setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/22th-birthday-anniversary-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
