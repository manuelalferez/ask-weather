export default function Weather({ weather }) {
  const iconUrl = `http://openweathermap.org/img/wn/${weather.today.summary.icon}.png`;
  const tempActualCelsius =
    Math.ceil(weather.today.temperature.actual - 273.15) + "º";
  const tempMinCelsius =
    Math.ceil(weather.today.temperature.min - 273.15) + "º";
  const tempMaxCelsius =
    Math.ceil(weather.today.temperature.max - 273.15) + "º";

  const sunriseDate = new Date(weather.today.summary.sunrise * 1000);
  const sunsetDate = new Date(weather.today.summary.sunset * 1000);

  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let todayDate = new Date(new Date().getTime());
  var dayName = days[todayDate.getDay()];
  return (
    <div className="w-full h-full md:max-w-md">
      <h1 className="mx-auto w-max text-2xl mt-4">
        <b>{weather.name}</b>, {weather.country}
      </h1>
      <div className="flex justify-between p-4 border-2 m-8 rounded-md">
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
      <div className="flex justify-around">
        <div>
          <img
            src="https://ik.imagekit.io/manuelalferez/ask-weather/wind-svgrepo-com_hbv1Ar9aW.svg?updatedAt=1641574072083"
            className="h-5"
          />
          <p>{weather.today.wind.speed}</p>
        </div>
        <div>
          <img
            src="https://ik.imagekit.io/manuelalferez/ask-weather/pressure-svgrepo-com_I1rnZgwjJ8.svg?updatedAt=1641574071417"
            className="h-5"
          />
          <p>{weather.today.summary.pressure}</p>
        </div>
        <div>
          <img
            src="https://ik.imagekit.io/manuelalferez/ask-weather/humidity-svgrepo-com_-imq20Fnf.svg?updatedAt=1641574071355"
            className="h-5"
          />
          <p>{weather.today.summary.humidity}</p>
        </div>
        <div>
          <img
            src="https://ik.imagekit.io/manuelalferez/ask-weather/sunrise-svgrepo-com_O6KCp_gt84.svg?updatedAt=1641574071614"
            className="h-5"
          />
          <p>
            {sunriseDate.getHours()}:{sunriseDate.getMinutes()}
          </p>
        </div>
        <div>
          <img
            src="https://ik.imagekit.io/manuelalferez/ask-weather/sunset-svgrepo-com_GJEwdcbXA.svg?updatedAt=1641574071918"
            className="h-5"
          />
          <p>
            {sunsetDate.getHours()}:{sunsetDate.getMinutes()}
          </p>
        </div>
      </div>

      <div className="flex flex-col p-4 border-2 m-8 rounded-md">
        {weather.forecastNextDays.map((day) => {
          const date = new Date(day.dt * 1000);
          let dayName = days[date.getDay()];
          let iconUrl = `http://openweathermap.org/img/wn/${day.summary.icon}.png`;
          const minTemp = Math.ceil(day.temperature.min - 273.15) + "º";
          const maxTemp = Math.ceil(day.temperature.max - 273.15) + "º";
          return (
            <div className="flex justify-between">
              <p className="text-md font-bold">{dayName}</p>
              <div className="flex">
                <div className="flex mr-8">
                  <p>{day.summary.title}</p>
                  <img src={iconUrl} className="h-8" />
                </div>
                <p className="mr-2 w-6">{maxTemp}</p>
                <p className="text-gray-500 w-6">{minTemp}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
