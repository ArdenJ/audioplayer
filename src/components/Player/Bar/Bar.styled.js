import styled from 'styled-components'

export const StyledBar = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-template-areas: 'barArea timeArea';
  grid-template-columns: auto 2fr;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  height: 1rem;
  width: 100%;

  .time {
    max-width: auto;
    padding: 0.125rem 0;
    margin: 0;
    font-size: 0.6rem;
    font-family: monospace;
    color: #222;
  }

  .percentageBar {
    box-sizing: border-box;
    height: 0.4rem;
    margin: auto 1rem auto 0.4rem;
  }
`
