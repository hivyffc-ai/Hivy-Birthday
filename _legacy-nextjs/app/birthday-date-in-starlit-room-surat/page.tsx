import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "birthday-date-in-starlit-room-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Birthday Date In Starlit Room Surat | Couple Experience",
  description: keyword?.metaDescription || "Plan a birthday date in starlit room in Surat. Private couple experience at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/birthday-date-in-starlit-room-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Birthday Date In Starlit Room Surat | Couple Experience",
    description: keyword?.metaDescription || "Plan a birthday date in starlit room in Surat. Private couple experience at HIVY.",
    url: "https://birthdaysurprisesurat.com/birthday-date-in-starlit-room-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
