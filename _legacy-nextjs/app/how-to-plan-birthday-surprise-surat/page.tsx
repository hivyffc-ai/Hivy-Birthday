import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "how-to-plan-birthday-surprise-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "How to Plan Birthday Surprise Surat | Expert Guide",
  description: keyword?.metaDescription || "Learn how to plan a birthday surprise in Surat. Expert romantic setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/how-to-plan-birthday-surprise-surat" },
  openGraph: {
    title: keyword?.metaTitle || "How to Plan Birthday Surprise Surat | Expert Guide",
    description: keyword?.metaDescription || "Learn how to plan a birthday surprise in Surat. Expert romantic setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/how-to-plan-birthday-surprise-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
