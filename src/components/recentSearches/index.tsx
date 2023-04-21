import React from 'react'
import {
  RecentList,
  RecentListItem,
  RecentListItemName,
  RecentSearchesContainer,
  RecentTitle,
} from './styles'

export const RecentSearches: React.FC<{ open: boolean }> = ({ open }) => {
  const citiesCache = localStorage.getItem('cities-cache') || ''
  let citiesArray: Array<string | any> = [...citiesCache.split(',')].reverse()

  return (
    <RecentSearchesContainer open={open}>
      <RecentTitle>Recent searches</RecentTitle>
      <RecentList>
        {citiesArray.length
          ? citiesArray.map((city, idx) => (
              <RecentListItem key={idx}>
                <RecentListItemName>{city}</RecentListItemName>
              </RecentListItem>
            ))
          : null}
      </RecentList>
    </RecentSearchesContainer>
  )
}
