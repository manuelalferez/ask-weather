export default function Details({ weather }) {
  const sunriseDate = new Date(weather.today.summary.sunrise * 1000);
  const sunsetDate = new Date(weather.today.summary.sunset * 1000);
  return (
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
  );
}
