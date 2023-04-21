import React from 'react'
import { useQuery } from 'react-query'
import {
  DetailsChangeTempButton,
  DetailsContainer,
  DetailsItemTitle,
  DetailsItemValue,
  DetailsList,
  DetailsListItem,
} from './styles'
import { SearchCityContext } from '../../contexts/city'
import { IWeatherResponse, fetchWeather } from '../../api/cities'
import weatherImg from '../../assets/img/weather.jpg'
import tempImg from '../../assets/img/temperature.jpg'
import windImg from '../../assets/img/wind.jpg'

export const Details: React.FC = () => {
  const [tempType, setTempType] = React.useState<string>('imperial')
  const cityContext = React.useContext(SearchCityContext)

  const { isError, isSuccess, isLoading, data } = useQuery<
    IWeatherResponse,
    Error
  >(
    [
      'cities',
      {
        lat: cityContext.searchCity.lat,
        lon: cityContext.searchCity.lon,
        temp: tempType,
      },
    ],
    () =>
      fetchWeather({
        lat: cityContext.searchCity.lat,
        lon: cityContext.searchCity.lon,
        temp: tempType,
      })
  )

  const handleChangeTempType = () => {
    if (tempType === 'imperial') {
      setTempType('metric')
    } else {
      setTempType('imperial')
    }
  }

  if (isError) {
    return <DetailsContainer>Error getting weather data</DetailsContainer>
  }

  if (isLoading) {
    return (
      <DetailsContainer>
        <DetailsList>
          <DetailsListItem img={weatherImg}>
            <DetailsItemValue size={18}>Loading...</DetailsItemValue>
            <DetailsItemTitle>Weather</DetailsItemTitle>
          </DetailsListItem>
          <DetailsListItem img={tempImg}>
            <DetailsItemValue size={18}>Loading...</DetailsItemValue>
            <DetailsItemTitle>Temperature</DetailsItemTitle>
          </DetailsListItem>
          <DetailsListItem img={windImg}>
            <DetailsItemValue size={18}>Loading...</DetailsItemValue>
            <DetailsItemTitle>Wind</DetailsItemTitle>
          </DetailsListItem>
        </DetailsList>
      </DetailsContainer>
    )
  }

  return (
    <DetailsContainer>
      <DetailsList>
        <DetailsListItem img={weatherImg}>
          <DetailsItemValue>{data?.weather[0].description}</DetailsItemValue>
          <DetailsItemTitle>Weather</DetailsItemTitle>
        </DetailsListItem>
        <DetailsListItem img={tempImg}>
          <DetailsItemValue size={32}>{data?.main.temp}</DetailsItemValue>
          <DetailsItemTitle>Temperature</DetailsItemTitle>
          <DetailsChangeTempButton onClick={handleChangeTempType}>
            {tempType === 'imperial' ? 'F' : 'C'}
            <sup>o</sup>
          </DetailsChangeTempButton>
        </DetailsListItem>
        <DetailsListItem img={windImg}>
          <DetailsItemValue size={32}>{data?.wind.speed}</DetailsItemValue>
          <DetailsItemTitle>Wind</DetailsItemTitle>
        </DetailsListItem>
      </DetailsList>
    </DetailsContainer>
  )
}
