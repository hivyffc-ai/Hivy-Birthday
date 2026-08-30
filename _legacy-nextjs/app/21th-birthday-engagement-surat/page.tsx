import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "21th-birthday-engagement-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "21th Birthday Engagement Surat | Special Couple Celebration",
  description: keyword?.metaDescription || "Celebrate your 21th birthday on Engagement in Surat. Special couple setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/21th-birthday-engagement-surat" },
  openGraph: {
    title: keyword?.metaTitle || "21th Birthday Engagement Surat | Special Couple Celebration",
    description: keyword?.metaDescription || "Celebrate your 21th birthday on Engagement in Surat. Special couple setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/21th-birthday-engagement-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
