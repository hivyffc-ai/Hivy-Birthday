import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "romantic-birthday-celebration-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Romantic Birthday Celebration Surat | Couples Only",
  description: keyword?.metaDescription || "Experience a romantic birthday celebration in Surat designed exclusively for couples. Book at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/romantic-birthday-celebration-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Romantic Birthday Celebration Surat | Couples Only",
    description: keyword?.metaDescription || "Experience a romantic birthday celebration in Surat designed exclusively for couples. Book at HIVY.",
    url: "https://birthdaysurprisesurat.com/romantic-birthday-celebration-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
