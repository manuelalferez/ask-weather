import Head from "next/head";
import { gql } from "@apollo/client";
import client from "../config/apollo-client";

export default function Home({ weather }) {
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
        {JSON.stringify(weather, null, "\t")}
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t"></footer>
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query {
        getCityByName(name: "Basel") {
          id
          name
          country
          coord {
            lon
            lat
          }
          weather {
            summary {
              title
              description
              icon
            }
            temperature {
              actual
              min
              max
            }
            wind {
              speed
            }
            clouds {
              all
              visibility
              humidity
            }
            timestamp
          }
        }
      }
    `,
  });

  return {
    props: {
      weather: data.getCityByName,
    },
  };
}
