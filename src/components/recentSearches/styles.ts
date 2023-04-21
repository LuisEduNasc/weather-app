import styled from "styled-components";

export const RecentSearchesContainer = styled.div<{ open: boolean }>`
  position: absolute;
  top: 50px;
  right: ${(props) => props.open ? 0 : -250 }px;
  width: 250px;
  height: 100vh;
  padding: 12px;
  background-color: #FFF;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  transition: all .3s ease-in-out;
  z-index: 6;
`;

export const RecentTitle = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: var(--fifth-color);
`

export const RecentList = styled.ul`
  list-style: none;
  padding: 12px 0;
`

export const RecentListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 12px;
  cursor: pointer;

  :hover {
    background-color: #ececec;
  }
`

export const RecentListItemName = styled.p`
  color: var(--primary-color);
`