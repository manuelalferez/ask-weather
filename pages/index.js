import Head from "next/head";
import { gql, useQuery } from "@apollo/client";

const GET_WEATHER = gql`
  query {
    getCityByName(name: "Basel") {
      id
      name
      country
      coord {
        lat
        lon
      }
      today {
        summary {
          title
          description
          icon
          pressure
          sunrise
          sunset
          humidity
          visibility
        }
        temperature {
          actual
          min
          max
        }
        wind {
          speed
        }
        timestamp
      }
      lastSevenDays {
        summary {
          title
          description
          icon
          pressure
          sunrise
          sunset
          humidity
          visibility
        }
        temperature {
          actual
          min
          max
        }
        wind {
          speed
        }
        timestamp
      }
    }
  }
`;

export default function Home() {
  const { data } = useQuery(GET_WEATHER);
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
        {JSON.stringify(data, null, "\t")}
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t"></footer>
    </div>
  );
}
