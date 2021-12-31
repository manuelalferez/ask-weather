import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Ask weather</title>
        <link
          rel="icon"
          href="https://ik.imagekit.io/manuelalferez/ask-weather/logo_nOGe2gz6p.svg?updatedAt=1640953005090"
        />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a
            className="text-blue-600"
            href="https://github.com/manuelalferez/ask-weather"
          >
            Ask Weather!
          </a>
        </h1>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        Footer
      </footer>
    </div>
  );
}
