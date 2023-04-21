import styled from "styled-components";

export const HomePageContainer = styled.main`
  position: relative;
`;

export const HomePageTop = styled.div`
`;

export const CoverImg = styled.img.attrs((props) => ({
  src: props.src
}))`
  width: 100%;
  height: 100vh;
  background-size: cover;
  opacity: 0.7;
`