import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "indoor-birthday-surprise-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Indoor Birthday Surprise Surat | Couples Only",
  description: keyword?.metaDescription || "Experience a indoor birthday surprise in Surat designed exclusively for couples. Book at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/indoor-birthday-surprise-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Indoor Birthday Surprise Surat | Couples Only",
    description: keyword?.metaDescription || "Experience a indoor birthday surprise in Surat designed exclusively for couples. Book at HIVY.",
    url: "https://birthdaysurprisesurat.com/indoor-birthday-surprise-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
