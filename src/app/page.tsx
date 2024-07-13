import type { Metadata } from "next";

import Image from 'next/image';

export const metadata: Metadata = {
  title: "KananPass - Open source",
  description: "Open source multiplatform solution to secure your passwords",
  keywords: ["password", "security", "open source", "multiplatform", "password manager"],
};

const year = new Date().getFullYear();

export default function HomePage() {
  return (
    <>
      <main className="flex flex-col">
        <nav className="flex sm:flex-row flex-col justify-between items-center sticky top-0 py-4 sm:px-40 bg-page">
          <h1 className="text-3xl font-bold sm:pb-0 pb-4">
            KananPass
          </h1>
          <button className="transition hover:bg-[#00bfa680] bg-[#00bfa6] disabled:bg-gray-700 text-white rounded-3xl px-5 py-3" disabled>
            Pre-register
          </button>
        </nav>

        <section className="sm:h-[81vh] flex justify-center items-center sm:py-0 py-10">
          <div className="flex flex-col justify-between lg:px-20 px-2 max-w-screen-xl h-2/4">
            <h1 className="sm:text-7xl text-5xl font-bold text-center">
              The <strong className="gradient font-bold">open source</strong> cross-platform solution to protect your passwords.
            </h1>
            <p className="sm:text-2xl text-xl text-center lg:px-44 px-0 sm:py-0 py-10">
              We together with the community are building a password manager that is secure, easy to use and available on all platforms.
            </p>
          </div>
        </section>

        <section className="sm:h-[45vh] flex flex-col justify-center items-center lg:px-20 px-2 mx-4 sm:py-0 py-10">
          <h2 className="text-4xl font-bold text-center">Features</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="flex flex-col items-center sm:py-0 py-5">
              <Image src="/icons/lock.svg" alt="Lock icon" width={100} height={100} />
              <h3 className="text-2xl font-bold">Secure</h3>
              <p className="text-xl text-center">Your passwords are encrypted with the latest encryption algorithms.</p>
            </div>
            <div className="flex flex-col items-center sm:py-0 py-5">
              <Image src="/icons/easy.svg" alt="Easy icon" width={100} height={100} />
              <h3 className="text-2xl font-bold">Easy to use</h3>
              <p className="text-xl text-center">The application is designed to be easy to use for everyone.</p>
            </div>
            <div className="flex flex-col items-center sm:py-0 py-5">
              <Image src="/icons/multiplatform.svg" alt="Multiplatform icon" width={100} height={100} />
              <h3 className="text-2xl font-bold">Multiplatform</h3>
              <p className="text-xl text-center">Available on all platforms, Windows, MacOS, Linux, Android and iOS.</p>
            </div>
          </div>
        </section>

        <footer className="flex flex-col items-center lg:px-20 px-2 py-5 bg-page">
          <p className="sm:text-xl text-lg text-center">
            KananPass is an open source project, you can contribute to the project on <a href="https://github.com/kananpass" target="_blank">GitHub</a>
          </p>
          <p className="sm:text-lg text-sm text-center">
            Made with ❤️ by the KananPass team and the community.
          </p>
          <p className="sm:text-sm text-center">
            © 2023 - { year } KananPass
          </p>
        </footer>
      </main>
    </>
  );
}
