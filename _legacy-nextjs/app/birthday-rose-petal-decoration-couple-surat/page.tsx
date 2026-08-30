import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "birthday-rose-petal-decoration-couple-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Birthday Rose Petal Decoration Couples Surat | Stunning Setup",
  description: keyword?.metaDescription || "Get beautiful birthday rose petal decoration for couples in Surat. Professional setup at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/birthday-rose-petal-decoration-couple-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Birthday Rose Petal Decoration Couples Surat | Stunning Setup",
    description: keyword?.metaDescription || "Get beautiful birthday rose petal decoration for couples in Surat. Professional setup at HIVY.",
    url: "https://birthdaysurprisesurat.com/birthday-rose-petal-decoration-couple-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
