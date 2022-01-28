import Head from "next/head";
import { gql, useQuery } from "@apollo/client";
import Weather from "../components/Weather";
import { useState } from "react";

const GET_WEATHER = gql`
  query Weather($name: String!) {
    getCityByName(name: $name) {
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
        dt
      }
      forecastNextDays {
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
        dt
      }
    }
  }
`;

export default function Home() {
  const [city, setCity] = useState("Basel");
  const { loading, error, data, refetch } = useQuery(GET_WEATHER, {
    variables: { name: "Basel" },
  });

  if (loading)
    return (
      <div className="flex justify-center items-center text-3xl h-screen w-screen">
        Loading
        <img
          src="https://ik.imagekit.io/300/0IyCDangboResources/Spin-1s-207px_YZH8Yxette.svg?updatedAt=1637828751533"
          class="animate-spin h-10 w-10 mb-4"
        />
      </div>
    );

  const weather = data.getCityByName;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 overflow-hidden">
      <Head>
        <title>Ask weather</title>
        <link
          rel="icon"
          href="https://ik.imagekit.io/manuelalferez/ask-weather/logo_nOGe2gz6p.svg?updatedAt=1640953005090"
        />
      </Head>

      <main className="home w-screen h-screen md:flex md:flex-col md:items-center">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            () => refetch({ name: city });
          }}
          className="flex justify-center items-center"
        >
          <input
            type="text"
            placeholder="Search.."
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            onClick={() => refetch({ name: city })}
            className="bg-myblue bg-opacity-80 rounded-full p-2 ml-2 h-10 w-10"
          >
            <img
              className="w-6 h-6"
              src="https://ik.imagekit.io/manuelalferez/ask-weather/search_8QGIbdPR5.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1643359729829"
            ></img>
          </button>
        </form>
        {error && (
          <div className="flex flex-col justify-center items-center mt-40">
            <h1 className="text-xl">🇬🇧 City not found 😢</h1>
            <h1 className="text-xl">🇪🇸 Ciudad no encontrada 😢</h1>
          </div>
        )}
        {!error && <Weather weather={weather} />}
      </main>
    </div>
  );
}
