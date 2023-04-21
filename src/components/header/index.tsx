import React from 'react'
import { FaHistory } from 'react-icons/fa'
import { HeaderContainer, HeaderLogotype, RecentButton } from './styles'
import { RecentSearches } from '../recentSearches'

export const HeaderComponent: React.FC<{ title: string }> = ({ title }) => {
  const [recentOpen, setRecentOpen] = React.useState<boolean>(false)

  return (
    <HeaderContainer>
      <HeaderLogotype>{title}</HeaderLogotype>
      <RecentButton onClick={() => setRecentOpen((recent) => !recent)}>
        <FaHistory size={18} color='#657a89' />
      </RecentButton>
      <RecentSearches open={recentOpen} />
    </HeaderContainer>
  )
}
