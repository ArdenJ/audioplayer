import styled from 'styled-components'

// Utility functions

export const StyledPlayerContainer = styled.div`
  display: grid;
  grid-template-areas: 'buttonArea infoArea';
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  height: 60px;
  width: 400px;
  font-family: monospace;

  background-color: ${props => props.rgb};
  background-image: linear-gradient(
    to top,
    rgb(0, 0, 0, 0.65),
    rgb(0, 0, 0, 0.7) 20%,
    rgb(0, 0, 0, 0) 120%
  );
  border-radius: 2px;

  .buttonContainer {
    grid-area: buttonArea;
    width: 60px;
    height: 100%;
    background-color: ${props => props.rgb};
    background-image: ${props => props.imgUrl};
  }

  .infoContainer {
    grid-area: infoArea;
    box-sizing: border-box;
    width: 340px;
    height: 100%;
    padding: 0.4rem;
  }

  .trackInfo {
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 30% 0.8fr auto;
    height: 100%;
  }

  .trackTitle,
  .trackInfo {
    color: #ffffff;
    text-align: left;
    font-size: 0.8rem;
  }

  .trackTitle {
    font-weight: 900;
  }
`
