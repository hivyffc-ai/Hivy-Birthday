import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "november-birthday-surprise-for-girlfriend-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "November Birthday Surprise For Girlfriend Surat | Seasonal Romantic",
  description: keyword?.metaDescription || "Plan a November birthday surprise for your girlfriend in Surat. Seasonal romantic setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/november-birthday-surprise-for-girlfriend-surat" },
  openGraph: {
    title: keyword?.metaTitle || "November Birthday Surprise For Girlfriend Surat | Seasonal Romantic",
    description: keyword?.metaDescription || "Plan a November birthday surprise for your girlfriend in Surat. Seasonal romantic setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/november-birthday-surprise-for-girlfriend-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
