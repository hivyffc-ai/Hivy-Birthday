import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "surprise-birthday-party-couple-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Surprise Birthday Party Couples Surat | Intimate Private",
  description: keyword?.metaDescription || "Plan a surprise birthday party for couples in Surat. Intimate private venue at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/surprise-birthday-party-couple-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Surprise Birthday Party Couples Surat | Intimate Private",
    description: keyword?.metaDescription || "Plan a surprise birthday party for couples in Surat. Intimate private venue at HIVY.",
    url: "https://birthdaysurprisesurat.com/surprise-birthday-party-couple-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
