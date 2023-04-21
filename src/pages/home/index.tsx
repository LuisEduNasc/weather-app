import React from 'react'
import { CoverImg, HomePageContainer, HomePageTop } from './style'
import { FaCity } from 'react-icons/fa'
import BackgroundImg from '../../assets/img/25501.jpg'
import { SearchCity } from '../../components/searchCity'
import { SearchCityContext } from '../../contexts/city'
import { Details } from '../../components/detailsCard'

export const HomePage: React.FC = () => {
  const searchCityContext = React.useContext(SearchCityContext)

  const handleSearchCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchCityContext.setSearchCity({
      name: event.target.value,
      country: undefined,
      state: undefined,
      lat: undefined,
      lon: undefined,
    })
  }

  return (
    <HomePageContainer>
      <HomePageTop>
        <CoverImg src={BackgroundImg} />
        <SearchCity
          type='text'
          name='city'
          label='Search for a city name'
          icon={<FaCity size={18} color='#b9c6da' />}
          value={searchCityContext.searchCity.name}
          onChangeFunc={(e) => handleSearchCity(e)}
        />
        {searchCityContext.searchCity.lat &&
        searchCityContext.searchCity.lon ? (
          <Details />
        ) : null}
      </HomePageTop>
    </HomePageContainer>
  )
}
