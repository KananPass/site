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
        <nav className="flex lg:flex-row flex-col justify-between items-center lg:sticky lg:top-0 py-4 sm:px-40 bg-page">
          <h1 className="text-3xl font-bold lg:pb-0 pb-4 cursor-pointer gradient hover-text">
            KananPass
          </h1>
          <div className="flex flex-row lg:pb-0 pb-4">
            <a href="#features" className="sm:px-4 px-2 hover-text">Features</a>
            <a href="#about" className="sm:px-4 px-2 hover-text">About</a>
            <a href="#download" className="sm:px-4 px-2 hover-text">Download</a>
            <a href="#contribute" className="sm:px-4 px-2 hover-text">Contribute</a>
          </div>
          <button className="transition hover:bg-[#00bfa680] bg-[#00bfa6] disabled:bg-gray-700 text-white rounded-3xl px-5 py-3" disabled>
            Pre-register
          </button>
        </nav>

        <section className="sm:h-[83vh] flex justify-center items-center sm:py-0 py-10">
          <div className="flex flex-col justify-between lg:px-20 px-2 max-w-screen-xl h-2/4">
            <h1 className="sm:text-7xl text-5xl font-bold text-center">
              The <strong className="gradient font-bold">open source</strong> cross-platform solution to protect your passwords.
            </h1>
            <p className="sm:text-2xl text-xl text-center lg:px-44 px-0 sm:py-0 py-10">
              We, together with the community, are creating a password manager that is secure, easy to use and available on all platforms.
            </p>
          </div>
        </section>

        <section className="sm:h-[53vh] flex flex-col justify-center items-center lg:px-20 px-2 mx-4 sm:py-0 py-10" id="features">
          <h2 className="text-4xl font-bold text-center pb-4">Features</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="flex flex-col items-center sm:py-0 py-5">
              <svg className="w-24 h-24 text-[#00bfa6]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 8.187c.104-2.1.415-3.41 1.347-4.34c.93-.932 2.24-1.243 4.34-1.347M21.5 8.187c-.104-2.1-.415-3.41-1.347-4.34c-.93-.932-2.24-1.243-4.34-1.347m0 19c2.1-.104 3.41-.415 4.34-1.347c.932-.93 1.243-2.24 1.347-4.34M8.187 21.5c-2.1-.104-3.41-.415-4.34-1.347c-.932-.93-1.243-2.24-1.347-4.34m7-5.258c0-.842-.132-2.141.376-2.899c1.123-1.673 3.504-1.451 4.344.182c.412.802.257 1.923.276 2.717m-4.996 0c-1.297 0-1.562.742-1.76 1.325c-.183.655-.37 2.22-.084 3.935c.214 1.092 1.049 1.572 1.767 1.633c.687.058 3.587.036 4.426.036c1.301 0 2.113-.286 2.495-1.597c.183-1.019.233-2.842-.072-4.007c-.404-1.165-1.22-1.325-1.776-1.325m-4.996 0c1.374-.055 4.21-.044 4.996 0" color="currentColor"/></svg>
              <h3 className="text-2xl font-bold py-2">
                Secure
              </h3>
              <p className="text-xl text-center">
                Your passwords will be encrypted using RSA (public and private key) and/or AES (symmetric encryption) to ensure that no one can access them other than you.
              </p>
            </div>
            <div className="flex flex-col items-center sm:py-0 py-5">
              <svg className="w-24 h-24 text-[#00bfa6]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33 41c-5.48 3.003-10 3-16 1c-6.076-2.026-10-9-10-14c0-2.744 4.114-4.372 5.529-4.85a.687.687 0 0 0 .471-.648V15a3.5 3.5 0 1 1 7 0v-2.5a3.5 3.5 0 1 1 7 0V15a3.5 3.5 0 1 1 7 0V7.5a3.5 3.5 0 0 1 7 0v20.732c0 2.472-.592 4.928-2.038 6.934C37.492 37.205 35.357 39.708 33 41"/></svg>
              <h3 className="text-2xl font-bold py-2">
                Easy to use
              </h3>
              <p className="text-xl text-center">
                The interface will be developed to be easy, so that you can manage your passwords without any problem. You will enter and exit the application without problems.
              </p>
            </div>
            <div className="flex flex-col items-center sm:py-0 py-5">
              <svg className="w-24 h-24 text-[#00bfa6]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M232 64a32 32 0 1 0-40 31v17a8 8 0 0 1-8 8H96a23.8 23.8 0 0 0-8 1.38V95a32 32 0 1 0-16 0v66a32 32 0 1 0 16 0v-17a8 8 0 0 1 8-8h88a24 24 0 0 0 24-24V95a32.06 32.06 0 0 0 24-31M64 64a16 16 0 1 1 16 16a16 16 0 0 1-16-16m32 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16M200 80a16 16 0 1 1 16-16a16 16 0 0 1-16 16"/></svg>
              <h3 className="text-2xl font-bold py-2">
                Development
              </h3>
              <p className="text-xl text-center">
                The development will begin for Android and will later begin with the other operating systems on the market. We will release more information as we progress.
              </p>
            </div>
          </div>
        </section>

        <section className="sm:h-[25vh] flex flex-col justify-center items-center lg:px-20 px-2 mx-4 sm:py-0 py-10" id="about">
          <h2 className="text-4xl font-bold text-center pb-4">About</h2>
          <div className="flex flex-col items-center sm:py-0 py-5">
            <p className="text-xl text-center lg:px-44 px-0 sm:py-0 py-10">
              KananPass arises from the need to have a password manager that is easy to use and not solely dependent on the cloud, allowing it to be used locally without any issues. Additionally, KananPass is open-source software, so you can view its source code and know exactly what it does with your passwords.
            </p>
          </div>
        </section>

        <section className="sm:h-[25vh] flex justify-center items-center sm:py-0 py-10" id="download">
          
        </section>

        <section className="sm:h-[25vh] flex flex-col justify-center items-center lg:px-20 px-2 mx-4 sm:py-0 py-10" id="contribute">
          <h2 className="text-4xl font-bold text-center pb-4">Contribute</h2>
          <div className="flex flex-col items-center sm:py-0 py-5">
            <p className="sm:text-xl text-lg text-center">
              KananPass is an open source project, you can contribute to the project on <a className="hover-text font-bold" href="https://github.com/kananpass" target="_blank">GitHub</a>
            </p>
          </div>
        </section>

        <footer className="flex flex-col items-center lg:px-20 px-2 py-5 bg-page">
          <p className="sm:text-lg text-sm text-center">
            Made with ❤️ by the KananPass team and the community.
          </p>
          <p className="sm:text-sm text-center">
            © { year } KananPass
          </p>
        </footer>
      </main>
    </>
  );
}
