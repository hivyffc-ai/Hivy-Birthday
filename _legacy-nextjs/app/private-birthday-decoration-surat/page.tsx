import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "private-birthday-decoration-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Private Birthday Decoration Surat | Couples Only",
  description: keyword?.metaDescription || "Experience a private birthday decoration in Surat designed exclusively for couples. Book at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/private-birthday-decoration-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Private Birthday Decoration Surat | Couples Only",
    description: keyword?.metaDescription || "Experience a private birthday decoration in Surat designed exclusively for couples. Book at HIVY.",
    url: "https://birthdaysurprisesurat.com/private-birthday-decoration-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
