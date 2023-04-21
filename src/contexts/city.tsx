import React from 'react'

export interface ICity {
  name: string
  country: string | undefined
  state: string | undefined
  lat: number | undefined
  lon: number | undefined
}

export interface ISearchCityContext {
  searchCity: ICity
  setSearchCity: (cityData: ICity) => void
}

export const SearchCityContext = React.createContext<ISearchCityContext>({
  searchCity: {
    name: '',
    country: undefined,
    state: undefined,
    lat: undefined,
    lon: undefined,
  },
  setSearchCity: () => {},
})

export const SearchCityProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [searchCity, setSearchCity] = React.useState<ICity>({
    name: '',
    country: undefined,
    state: undefined,
    lat: undefined,
    lon: undefined,
  })

  const providerObj: ISearchCityContext = {
    searchCity,
    setSearchCity,
  }

  return (
    <SearchCityContext.Provider value={providerObj}>
      {children}
    </SearchCityContext.Provider>
  )
}
