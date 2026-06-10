import sun from "@/assets/icon-sunny.webp";
import drizzle from "@/assets/icon-drizzle.webp";
import rain from "@/assets/icon-rain.webp";
import snow from "@/assets/icon-snow.webp";
import storm from "@/assets/icon-storm.webp";
import fog from "@/assets/icon-fog.webp";
import cloud from "@/assets/icon-overcast.webp";
import partlyCloud from "@/assets/icon-partly-cloudy.webp";

export type WeatherCondition =
  | "sunny"
  | "partlyCloud"
  | "drizzle"
  | "rain"
  | "snow"
  | "storm"
  | "fog"
  | "overcast";


export const weatherIconMap: Record<WeatherCondition, string> = {
  sunny: sun,
  partlyCloud,
  drizzle,
  rain,
  snow,
  storm,
  fog,
  overcast: cloud,
};
