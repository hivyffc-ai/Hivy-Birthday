import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "affordable-birthday-surprise-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Affordable Birthday Surprise Surat | Budget Couple Celebration",
  description: keyword?.metaDescription || "Book an affordable birthday surprise in Surat. Budget-friendly romantic setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/affordable-birthday-surprise-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Affordable Birthday Surprise Surat | Budget Couple Celebration",
    description: keyword?.metaDescription || "Book an affordable birthday surprise in Surat. Budget-friendly romantic setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/affordable-birthday-surprise-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
