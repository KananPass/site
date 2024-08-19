import type { Metadata } from "next";

import NavbarPage from "../components/navbar";
import Footer from "../components/footer";
import FeaturesPage from "../components/features";
import AboutPage from "../components/about";
import DownloadPage from "../components/download";
import ContributePage from "../components/contribute";
import PresentationPage from "../components/presentation";

export const metadata: Metadata = {
  title: "KananPass - Open source app",
  description: "Open source multiplatform solution to secure your passwords",
  keywords: ["password", "security", "open source", "multiplatform", "password manager"],
};

export default function HomePage() {
  return (
    <>
      <main className="flex flex-col gap-2">
        <NavbarPage />

        <PresentationPage />

        <FeaturesPage />

        <AboutPage />

        <DownloadPage />

        <ContributePage />

        <Footer />
      </main>
    </>
  );
}
