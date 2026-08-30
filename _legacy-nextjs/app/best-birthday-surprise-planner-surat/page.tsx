import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "best-birthday-surprise-planner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Best Birthday Surprise Planner Surat | Top Rated",
  description: keyword?.metaDescription || "Find the best birthday surprise planner in Surat at HIVY. Professional romantic setup for couples.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/best-birthday-surprise-planner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Best Birthday Surprise Planner Surat | Top Rated",
    description: keyword?.metaDescription || "Find the best birthday surprise planner in Surat at HIVY. Professional romantic setup for couples.",
    url: "https://birthdaysurprisesurat.com/best-birthday-surprise-planner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
