import AboutHome from "@/components/AboutHome";
import { HeroBanner } from "@/components/HeroBanner";
import Page from "@/components/layout/Page";

export default function Home() {
  return (
    <Page>
      <HeroBanner />
      <AboutHome />
    </Page>
  );
}
