export default function Summary({ weather }) {
  const iconUrl = `http://openweathermap.org/img/wn/${weather.today.summary.icon}.png`;
  const tempActualCelsius =
    Math.ceil(weather.today.temperature.actual - 273.15) + "º";
  const tempMinCelsius =
    Math.ceil(weather.today.temperature.min - 273.15) + "º";
  const tempMaxCelsius =
    Math.ceil(weather.today.temperature.max - 273.15) + "º";
  return (
    <div>
      <h1 className="mx-auto w-max text-2xl mt-4">
        <b>{weather.name}</b>, {weather.country}
      </h1>
      <div className="flex justify-between p-4 border-white shadow-lg m-8 rounded-md">
        <div>
          <img src={iconUrl} className="w-16" />
          <div className="text-lg">{weather.today.summary.title}</div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-5xl">{tempActualCelsius}</h2>
          <div className="flex flex-row text-gray-500 mt-4">
            <p>Min: {tempMinCelsius}</p>
            <p className="ml-2">High: {tempMaxCelsius}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
