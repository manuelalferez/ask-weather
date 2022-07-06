import Details from "./Details";
import Forecast from "./Forecast";
import Summary from "./Summary";

export default function Weather({ weather }) {
  return (
    <div className="w-full h-full relative flex justify-center">
      <div className="z-10 md:max-w-2xl md:mx-auto">
        <Summary weather={weather} />
        <Details weather={weather} />
        <Forecast weather={weather} />
      </div>
      <img
        src="https://ik.imagekit.io/manuelalferez/ask-weather/bg_mobile_gziHD6-_7.svg"
        className="absolute top-0 w-screen z-0 md:hidden"
      />
      <img
        src="https://ik.imagekit.io/manuelalferez/ask-weather/bg_laptop_wlm0ySmzJ.svg"
        className="absolute -bottom-2 w-screen z-0 hidden md:inline"
      />
    </div>
  );
}
