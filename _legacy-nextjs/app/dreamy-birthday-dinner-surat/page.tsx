import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "dreamy-birthday-dinner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Dreamy Birthday Dinner Surat | Couples Only",
  description: keyword?.metaDescription || "Experience a dreamy birthday dinner in Surat designed exclusively for couples. Book at HIVY.",
  alternates: { canonical: "https://birthdaysurprisesurat.com/dreamy-birthday-dinner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Dreamy Birthday Dinner Surat | Couples Only",
    description: keyword?.metaDescription || "Experience a dreamy birthday dinner in Surat designed exclusively for couples. Book at HIVY.",
    url: "https://birthdaysurprisesurat.com/dreamy-birthday-dinner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
