import { Metadata } from "next";
import FFCAreaPage from "@/components/ffc-area-page";
import { getAreaBySlug, getAreaMetaTitle, getAreaMetaDescription } from "@/lib/ffc-config";

const area = getAreaBySlug("sachin-surat")!;

export const metadata: Metadata = {
  title: getAreaMetaTitle(area),
  description: getAreaMetaDescription(area),
  keywords: [area.name, "birthday surprise", "birthday celebration", "birthday party", "Surat", "HIVY"],
  alternates: { canonical: `https://birthdaysurprisesurat.com/${area.slug}` },
  openGraph: {
    title: getAreaMetaTitle(area),
    description: getAreaMetaDescription(area),
    url: `https://birthdaysurprisesurat.com/${area.slug}`,
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCAreaPage area={area} />;
}
