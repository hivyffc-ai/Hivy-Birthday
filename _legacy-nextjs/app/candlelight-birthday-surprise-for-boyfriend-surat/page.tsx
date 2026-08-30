import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "candlelight-birthday-surprise-for-boyfriend-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Candlelight Birthday Surprise For Boyfriend Surat | Private Setup",
  description: keyword?.metaDescription || "Book a candlelight birthday surprise for your boyfriend in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/candlelight-birthday-surprise-for-boyfriend-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Candlelight Birthday Surprise For Boyfriend Surat | Private Setup",
    description: keyword?.metaDescription || "Book a candlelight birthday surprise for your boyfriend in Surat. Private romantic setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/candlelight-birthday-surprise-for-boyfriend-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
