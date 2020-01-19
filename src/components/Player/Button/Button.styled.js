import styled from 'styled-components'

export const StyledButton = styled.button`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  width: 100%;
  height: 100%;

  border: none;
  background: none;

  padding: 0;
  margin: 0;
  align-items: center;

  .image {
    position: absolute;
    top: 0;
    z-index: 1;
    overflow: hidden;
  }

  img {
    width: ${({ theme }) => theme.small.player.box};
    overflow: hidden;

    @media ${({ theme }) => theme.medium.screenWidth} {
      width: ${({ theme }) => theme.medium.player.box};
    }

    @media ${({ theme }) => theme.large.screenWidth} {
      width: ${({ theme }) => theme.large.player.box};
    }
  }

  .playPause {
    align-items: center;
    display: grid;
    cursor: pointer;
  }

  .playPause svg {
    z-index: 10;
    position: relative;
    margin: auto;
    padding: auto;
  }
`
