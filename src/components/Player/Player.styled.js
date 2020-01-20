import styled from 'styled-components'

export const StyledPlayerContainer = styled.div`
  position: relative;
  display: grid;
  box-sizing: border-box;
  grid-template-areas: 'buttonArea infoArea';
  grid-template-columns: ${({ theme }) => theme.small.player.box} auto;
  padding: 0;
  margin: 1rem;
  border-radius: 8px;
  height: ${({ theme }) => theme.small.player.height};
  width: ${({ theme }) => theme.small.player.width};
  font-family: monospace;
  background-color: white;
  overflow: hidden;
  box-shadow: 0px 0px 2px rgb(0, 0, 0, 0.4);
  cursor: default;

  @media ${({ theme }) => theme.medium.screenWidth} {
    height: ${({ theme }) => theme.medium.player.height};
    width: ${({ theme }) => theme.medium.player.width};
    grid-template-columns: ${({ theme }) => theme.medium.player.box} auto;
  }

  @media ${({ theme }) => theme.large.screenWidth} {
    height: ${({ theme }) => theme.large.player.height};
    width: ${({ theme }) => theme.large.player.width};
    grid-template-columns: ${({ theme }) => theme.large.player.box} auto;
  }

  &:hover {
    transition-duration: 0.3s;
    background-color: rgb(0, 0, 0, 0.05);
  }

  .buttonContainer {
    grid-area: buttonArea;
    width: ${({ theme }) => theme.small.player.box};
    height: 100%;
    background-color: #222222;
    border-radius: 8px 0px 0px 8px;

    @media ${({ theme }) => theme.medium.screenWidth} {
      width: ${({ theme }) => theme.medium.player.box};
    }

    @media ${({ theme }) => theme.large.screenWidth} {
      width: ${({ theme }) => theme.large.player.box};
    }
  }

  .infoContainer {
    grid-area: infoArea;
    box-sizing: border-box;
    display: grid;
    grid-template-areas:
      'titles moreInfo'
      'bar moreInfo';
    grid-template-rows: 64% 36%;
    grid-template-columns: auto 30px;
    max-width: 360px;
    padding: 0 0 0 0.4rem;
    margin: auto 0;
  }

  .trackInfo {
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 46% 1fr;
    color: #222;
    text-align: left;
    font-size: ${({ theme }) => theme.small.player.fontSize};
    padding: auto 0.2rem;

    @media ${({ theme }) => theme.medium.screenWidth} {
      font-size: ${({ theme }) => theme.medium.player.fontSize};
    }

    @media ${({ theme }) => theme.large.screenWidth} {
      font-size: ${({ theme }) => theme.large.player.fontSize};
    }
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
    display: grid;
    width: 30px;
    }
  }

  .moreInfo button {
    background: transparent;
    border: none;
  }

  .moreInfo svg {
    height: 100%;
    margin: auto;
    cursor: pointer;
  }
`
