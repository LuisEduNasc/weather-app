import React from 'react'
import { useQuery } from 'react-query'
import { fetchCities, ICityResponse } from '../../api/cities'
import { SearchCityContext } from '../../contexts/city'

import {
  DropdownContainer,
  DropdownItem,
  DropdownItemsContainer,
  DropdownItemsList,
  DropdownItemText,
} from './styles'

export const DropdownComponent: React.FC<{
  active: boolean
  searchValue: string
}> = ({ active, searchValue }) => {
  const { isError, isSuccess, isLoading, data } = useQuery<
    ICityResponse[],
    Error
  >(['cities', searchValue], () => fetchCities(searchValue))

  const cityContext = React.useContext(SearchCityContext)

  const handleItemSelected = (
    cityName: string,
    cityCountry: string,
    cityState: string,
    cityLat: number,
    cityLon: number
  ): void => {
    cityContext.setSearchCity({
      name: cityName,
      country: cityCountry,
      state: cityState,
      lat: cityLat,
      lon: cityLon,
    })
  }

  if (isLoading) {
    return (
      <DropdownContainer>
        <DropdownItemsContainer open={active}>
          <DropdownItemsList>
            <DropdownItem>
              <DropdownItemText>Loading items...</DropdownItemText>
            </DropdownItem>
          </DropdownItemsList>
        </DropdownItemsContainer>
      </DropdownContainer>
    )
  }

  if (isError) {
    return (
      <DropdownContainer>
        <DropdownItemsContainer open={active}>
          <DropdownItemsList>
            <DropdownItem>
              <DropdownItemText>
                Something went wrong, try again.
              </DropdownItemText>
            </DropdownItem>
          </DropdownItemsList>
        </DropdownItemsContainer>
      </DropdownContainer>
    )
  }

  return (
    <DropdownContainer>
      <DropdownItemsContainer open={active}>
        <DropdownItemsList>
          {isSuccess && data.length > 0 ? (
            data.map((city: ICityResponse) => (
              <DropdownItem
                key={`${city.name}-${city.lat}`}
                onClick={() =>
                  handleItemSelected(
                    city.name,
                    city.country,
                    city.state,
                    city.lat,
                    city.lon
                  )
                }
              >
                <DropdownItemText>
                  {city.name} - {city.state} - {city.country}
                </DropdownItemText>
              </DropdownItem>
            ))
          ) : (
            <DropdownItem>
              <DropdownItemText>No results found.</DropdownItemText>
            </DropdownItem>
          )}
        </DropdownItemsList>
      </DropdownItemsContainer>
    </DropdownContainer>
  )
}
