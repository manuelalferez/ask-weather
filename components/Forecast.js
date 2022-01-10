export default function Forecast({ weather }) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <div className="flex flex-col p-4 border-2 border-white shadow-lg m-8 rounded-md bg-white md:w-96">
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
  );
}
