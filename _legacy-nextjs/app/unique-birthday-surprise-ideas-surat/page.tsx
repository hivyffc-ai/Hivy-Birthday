import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "unique-birthday-surprise-ideas-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Unique Birthday Surprise Ideas Surat | Creative Couple Setup",
  description: keyword?.metaDescription || "Discover unique birthday surprise ideas for couples in Surat. Creative romantic setups at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/unique-birthday-surprise-ideas-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Unique Birthday Surprise Ideas Surat | Creative Couple Setup",
    description: keyword?.metaDescription || "Discover unique birthday surprise ideas for couples in Surat. Creative romantic setups at HIVY.",
    url: "https://birthdaysurprisesurat.com/unique-birthday-surprise-ideas-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
