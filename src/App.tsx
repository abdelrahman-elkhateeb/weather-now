import DailyForecast from "./components/dailyForecast/DailyForecast";
import HeroHeading from "./components/HeroHeading";
import HourlyForecast from "./components/HourlyForecast";
import Navbar from "./components/navbar/Navbar";
import SearchBar from "./components/SearchBar";
import WeatherOverview from "./components/weatherOverview/WeatherOverview";

export function App() {
  return (
    <main className="container mx-auto px-4">
      <Navbar />
      <HeroHeading />
      <SearchBar />
      <section className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <WeatherOverview />
          <DailyForecast />
        </div>
        <div className="col-span-1">
          <HourlyForecast />
        </div>
      </section>
    </main>
  )
}

export default App;
