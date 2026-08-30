import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { serviceCategories, getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "birthday-surprise-for-wife-surat")!;

export const metadata: Metadata = {
  title: keyword.metaTitle,
  description: keyword.metaDescription,
  keywords: [keyword.title, "birthday surprise", "wife birthday", "Surat", "HIVY"],
  alternates: { canonical: `https://birthdaysurprisesurat.com/${keyword.slug}` },
  openGraph: {
    title: keyword.metaTitle,
    description: keyword.metaDescription,
    url: `https://birthdaysurprisesurat.com/${keyword.slug}`,
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
