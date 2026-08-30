import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "birthday-decoration-surprise-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Birthday Decoration Surprise Surat | Stunning Setup",
  description: keyword?.metaDescription || "Get birthday decoration surprise in Surat. Stunning romantic decorations for couples at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/birthday-decoration-surprise-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Birthday Decoration Surprise Surat | Stunning Setup",
    description: keyword?.metaDescription || "Get birthday decoration surprise in Surat. Stunning romantic decorations for couples at HIVY.",
    url: "https://birthdaysurprisesurat.com/birthday-decoration-surprise-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
