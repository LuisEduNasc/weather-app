import styled from "styled-components";

interface IValue {
  size?: number | undefined
}

export const DetailsContainer = styled.div`
  position: absolute;
  top: 300px;
  left: 50%;
  transform: translateX(-50%);
  padding: 22px;
  z-index: 1;
`;

export const DetailsList = styled.ul`
  display: flex;
  list-style: none;
`;

export const DetailsListItem = styled.li<{ img: any }>`
  position: relative;
  width: 150px;
  height: 200px;
  padding: 12px;
  border-radius: 6px;
  background-color: #FFFFFF;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.img});

  &:not(:first-child) {
    margin-left: 22px;
  }
`;

export const DetailsItemTitle = styled.h2`
  position: absolute;
  left: 50%;
  bottom: 22px;
  transform: translateX(-50%);
  font-size: 16px;
  text-align: center;
  color: #000;
  text-shadow: 2px 2px #ececec;
  text-transform: uppercase;
`;

export const DetailsItemValue = styled(DetailsItemTitle)<IValue>`
  bottom: 62px;
  font-size: ${(props) => props.size ? props.size : 22}px;
`

export const DetailsChangeTempButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 18px;
  font-weight: bold;
  color: var(--primary-color);
  padding: 4px 8px;
  border: 1px solid var(--primary-color);
  border-radius: 6px;
  background-color: #FFFFFF;
  cursor: pointer;
`;