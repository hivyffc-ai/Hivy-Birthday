import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "february-birthday-celebration-couple-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "February Birthday Celebration Couples Surat | Private Setup",
  description: keyword?.metaDescription || "Celebrate a February birthday as a couple in Surat. Intimate private venue at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/february-birthday-celebration-couple-surat" },
  openGraph: {
    title: keyword?.metaTitle || "February Birthday Celebration Couples Surat | Private Setup",
    description: keyword?.metaDescription || "Celebrate a February birthday as a couple in Surat. Intimate private venue at HIVY.",
    url: "https://birthdaysurprisesurat.com/february-birthday-celebration-couple-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
