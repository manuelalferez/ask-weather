import Head from "next/head";
import { gql, useQuery } from "@apollo/client";
import Weather from "../components/Weather";
import { useState } from "react";

const getWeather = (city) => {
  return gql`
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
};

export default function Home() {
  const [city, setCity] = useState("Basel");
  const [query, setQuery] = useState(getWeather(city));
  const { loading, error, data } = useQuery(getWeather(query));

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
  if (error) return `Error! ${error.message}`;
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
        <Weather weather={weather} />
      </main>
    </div>
  );
}
