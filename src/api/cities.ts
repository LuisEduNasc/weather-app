import axios from 'axios'

export interface ICityResponse {
  name: string,
  country: string,
  state: string,
  lat: number,
  lon: number
}

export interface IWeatherResponse {
  weather: [
    {
      id: number,
      main: string,
      description: string,
      icon: string
    }
  ],
  base: string,
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number,
    sea_level: number,
    grnd_level: number
  },
  visibility: number,
  wind: {
    speed: number,
    deg: number,
    gust: number
  },
  rain: Object,
  clouds: {
    all: number
  },
  dt: number,
  sys: {
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number
  },
  timezone: number,
  id: number,
  name: string,
  cod: number
}

export const fetchCities = async (searchValue: string): Promise<ICityResponse[]> => {
  const response = await axios({
    baseURL: process.env.NODE_ENV == 'production' ? 'https://weather-leis-app.herokuapp.com' : 'localhost:3000',
    url: `http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=50&appid=${process.env.REACT_APP_API_KEY}`,
    method: 'get',
  }).then(({ data }) => {
    const cities: ICityResponse[] = data;
    return cities;
  }) as ICityResponse[];

  return response;
}

export const fetchWeather = async ({lat, lon, temp = 'imperial'}: {lat: number | undefined, lon: number | undefined, temp: string | undefined}): Promise<IWeatherResponse> => {
  const response = await axios({
      baseURL: process.env.NODE_ENV == 'production' ? 'https://weather-leis-app.herokuapp.com' : 'localhost:3000',
      url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=${temp}`,
      method: 'get'
    }).then(({ data }) => {
      const weather: IWeatherResponse = data;

      let citiesCache = localStorage.getItem('cities-cache') || ''
      let citiesArray: Array<string | any> = [];

      if (citiesCache) {
        citiesArray.push(...citiesCache.split(','), data.name)

        if (citiesCache.split(',').length >= 5) {
          citiesArray.shift()
        }
      } else {
        citiesArray.push(data.name)
      }

      citiesCache = citiesArray.join(',')
      localStorage.setItem('cities-cache', citiesCache)

      return weather;
    }) as IWeatherResponse

  return response;
}