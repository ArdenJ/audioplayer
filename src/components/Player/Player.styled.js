import styled from 'styled-components'

const playerHeight = '60px'
// playejr widthh = 420

export const StyledPlayerContainer = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-template-areas: 'buttonArea infoArea';
  grid-template-columns: ${playerHeight} auto;
  padding: 0;
  margin: 1rem;
  border-radius: 8px;
  height: ${playerHeight};
  width: 420px;
  font-family: monospace;
  background-color: transparent;
  cursor: default;

  &:hover {
    transition-duration: 0.3s;
    background-color: rgb(0, 0, 0, 0.05);
  }

  .buttonContainer {
    grid-area: buttonArea;
    width: ${playerHeight};
    height: ${playerHeight};
    background-color: ${props => props.rgb};
    background-image: url(${props => props.image});
    border-radius: 8px;
  }

  .controls svg {
    cursor: pointer;
    /* SVG ONCLICK TRANSITION  */
    &:active {
      transition-duration: 0.5s;
    }
  }

  .infoContainer {
    grid-area: infoArea;
    box-sizing: border-box;
    display: grid;
    grid-template-areas:
      'titles moreInfo'
      'bar moreInfo';
    grid-template-rows: 50% 50%;
    grid-template-columns: auto 30px;
    max-width: 360px;
    padding: 0.4rem;
    border-right: 1px solid white;
  }

  .trackInfo {
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 46% 1fr;
    color: #222;
    text-align: left;
    font-size: 1rem;
    padding: auto 0.2rem;
  }

  .trackTitle {
    font-weight: 900;
  }

  .tooltip {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.5s;
  }

  .moreInfo {
    grid-area: moreInfo;
    margin: auto 1rem;
    justify-self: center;
    width: 30px;

    &:hover .tooltip {
      visibility: visible;
      opacity: 1;
      transition-delay: 0.8s;
    }
  }

  .moreInfo svg {
    cursor: pointer;
  }
`
