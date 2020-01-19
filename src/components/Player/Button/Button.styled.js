import styled from 'styled-components'

export const StyledButton = styled.button`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  width: 60px;
  height: 60px;

  border: none;
  background: none;

  .image {
    position: absolute;
    top: 0;
    z-index: 1;
    overflow: hidden;
  }

  .playPause {
    position: absolute;
    z-index: 10;
    top: 10px;
    left: 10px;
  }
`
