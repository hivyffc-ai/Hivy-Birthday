import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "birthday-surprise-with-couple-photoshoot-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Birthday Surprise With Couple Photoshoot Surat | Complete Package",
  description: keyword?.metaDescription || "Book birthday surprise with couple photoshoot in Surat. Complete romantic package at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/birthday-surprise-with-couple-photoshoot-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Birthday Surprise With Couple Photoshoot Surat | Complete Package",
    description: keyword?.metaDescription || "Book birthday surprise with couple photoshoot in Surat. Complete romantic package at HIVY.",
    url: "https://birthdaysurprisesurat.com/birthday-surprise-with-couple-photoshoot-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
