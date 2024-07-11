import type { Metadata } from "next";

import Image from 'next/image';

export const metadata: Metadata = {
  title: "KananPass",
  description: "Open source multiplatform solution to secure your passwords",
  keywords: ["password", "security", "open source", "multiplatform", "password manager"],
};

export default function HomePage() {
  return (
    <>
      <main className="flex flex-col">
        <nav className="flex sm:flex-row flex-col justify-between items-center sticky top-0 py-4 sm:px-40 dark:bg-black bg-white">
          <h1 className="text-3xl font-bold sm:pb-0 pb-4">KananPass</h1>
          <button className="transition hover:bg-[#00bfa680] bg-[#00bfa6] text-white rounded-3xl px-5 py-3">
            Pre-register
          </button>
        </nav>

        <section className="h-[70vh] flex justify-center items-center">
          <div className="flex flex-col justify-between lg:px-20 px-2 max-w-screen-xl h-2/4">
            <h1 className="text-7xl font-bold text-center">
              The open source cross-platform solution to protect your passwords.
            </h1>
            <p className="text-2xl text-center lg:px-44 px-0">
              We together with the community are building a password manager that is secure, easy to use and available on all platforms.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
