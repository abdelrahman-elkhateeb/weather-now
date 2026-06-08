import sun from "@/assets/icon-sunny.webp";

export default function WeatherHeroCard() {
  return (
    <div className="flex justify-between">
      <div>
        <h2>
          Berlin, Germany
        </h2>
        <p>Tuesday, Aug 5, 2025</p>
      </div>

      <div className="flex">
        <div>
          <img src={sun} alt="sun" />
        </div>
        <span>
          20°
        </span>
      </div>
    </div>
  )
}
