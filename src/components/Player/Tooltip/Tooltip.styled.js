import styled from 'styled-components'

export const StyledTooltip = styled.span`
  transition-duration: 2s;
  min-height: auto;
  max-height: 66vh;
  min-width: 60vw;
  background-color: black;
  color: #fff;
  text-align: left;
  border-radius: 6px;
  padding: 1rem 0.5rem;
  overflow-y: scroll;

  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  z-index: 1;

  &::-webkit-scrollbar {
    z-index: 20;
    width: 0.4rem;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #444;
    border-radius: 6px;
  }

  li {
    list-style: none;
  }
`
