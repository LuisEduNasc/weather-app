import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid var(--fifth-color);
  padding: 6px 12px;
`;

export const HeaderLogotype = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: var(--fifth-color);
`;

export const RecentButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
  padding: 6px;
  border: none;
  border-radius: 6px;
  background-color: #FFFFFF;
  cursor: pointer;
`;