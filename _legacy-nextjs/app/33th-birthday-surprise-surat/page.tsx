import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "33th-birthday-surprise-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "33th Birthday Surprise Surat | Make Them Feel Special",
  description: keyword?.metaDescription || "Create an unforgettable 33th birthday surprise in Surat. Romantic setup, decorations & intimate celebration at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/33th-birthday-surprise-surat" },
  openGraph: {
    title: keyword?.metaTitle || "33th Birthday Surprise Surat | Make Them Feel Special",
    description: keyword?.metaDescription || "Create an unforgettable 33th birthday surprise in Surat. Romantic setup, decorations & intimate celebration at HIVY.",
    url: "https://birthdaysurprisesurat.com/33th-birthday-surprise-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
