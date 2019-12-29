import styled from 'styled-components'

export const StyledBar = styled.div`
  display: grid;
  grid-template-areas: 'barArea timeArea';
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  height: 0.5rem;
  width: 100%;

  .time {
    max-width: 60px;
    padding: 0;
    margin: 0;
    font-size: 0.5rem;
    font-family: monospace;
    color: #ffffff;
  }

  .percentageBar {
    box-sizing: border-box;
    height: 0.2rem;
    min-width: 250px;
    margin: 0.2rem 0;
  }
`
