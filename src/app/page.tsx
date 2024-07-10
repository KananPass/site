import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KananPass",
  description: "Open source multiplatform solution to secure your passwords",
};

export default function Home() {
  return (
    <>
      <main className="flex flex-col min-h-screen justify-center items-center">
        <h1 className="text-2xl">
          KananPass
        </h1>
        <h3 className="text-xl">
          Comming soon...
        </h3>
      </main>
    </>
  );
}
