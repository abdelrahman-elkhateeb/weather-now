import DailyForecast from "./components/dailyForecast/DailyForecast";
import HeroHeading from "./components/HeroHeading";
import HourlyForecast from "./components/HourlyForecast";
import Navbar from "./components/navbar/Navbar";
import SearchBar from "./components/SearchBar";
import WeatherOverview from "./components/weatherOverview/WeatherOverview";
import { useSearchStore } from "./stores/useSearchStore";

export function App() {
  const searchedCity = useSearchStore(s => s.searchedCity);

  return (
    <main className="container mx-auto px-4">
      <Navbar />
      <HeroHeading />
      <SearchBar />
      {searchedCity ? (
        <section className="grid md:grid-cols-4 gap-4 mt-10">
          <div className="md:col-span-3">
            <WeatherOverview />
            <DailyForecast />
          </div>

          <div className="md:col-span-1">
            <HourlyForecast />
          </div>
        </section>
      ) : (
        <p className="text-center mt-5 font-bold text-3xl">no search result found!</p>
      )}
    </main>
  )
}

export default App;
