import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "intimate-birthday-surprise-for-partner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Intimate Birthday Surprise For Partner Surat | Private Setup",
  description: keyword?.metaDescription || "Book a intimate birthday surprise for your partner in Surat. Private romantic setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/intimate-birthday-surprise-for-partner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Intimate Birthday Surprise For Partner Surat | Private Setup",
    description: keyword?.metaDescription || "Book a intimate birthday surprise for your partner in Surat. Private romantic setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/intimate-birthday-surprise-for-partner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
