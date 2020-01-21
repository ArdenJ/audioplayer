import styled from 'styled-components'

export const StyledModal = styled.div`
  /* Defaults */
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  font-family: Helvetica, Arial, sans-serif;

  ::-webkit-scrollbar {
    width: 0.3rem;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #444;
  }

  /* classes */
  .modalOverlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(3px) brightness(60%);
    opacity: 1;
    transition-duration: 0.4s;
  }

  .modalWrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
  }

  .modal {
    z-index: 100;
    box-sizing: border-box;
    background: #222;
    color: white;
    position: relative;
    margin: 1.75rem auto;
    border-radius: 8px;
    max-width: 600px;
    max-height: 80vh;
    overflow-y: hidden;
  }

  .modal img {
    width: 100%;
    border-radius: inherit;
    position: relative;
  }

  .container {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 2rem;
    backdrop-filter: blur(20px) brightness(70%);
    background: linear-gradient(
      to top,
      black,
      rgb(0, 0, 0, 0.8) 60%,
      rgb(0, 0, 0, 0.2) 100%
    );
  }

  .modalHeader {
    vertical-align: middle;
    text-transform: uppercase;
    display: grid;
    grid-template-areas: 'title button';
    grid-template-columns: auto 3rem;
  }

  .button {
    display: grid;
    grid-area: button;
    width: 3rem;
  }

  .button button {
    margin: auto;
    height: 3rem;
    width: 3rem;
    background-color: transparent;
    border: 2.5px solid white;
    border-radius: 50%;
    color: white;
    font-size: 2rem;
  }
`

export const StyledModalHeader = styled.div`
  grid-area: title;
  line-height: 3rem;
  vertical-align: middle;
`

export const StyledModalBody = styled.div`
  margin-top: 0.6rem;
  padding: 0.6rem 0;
  display: grid;
  width: 80%;
  grid-template-areas:
    'picture info'
    'body body';
  grid-template-columns: 30% 70%;

  .image {
    grid-area: picture;
  }

  .image img {
    width: 100%;
  }

  .info {
    grid-area: info;
    padding: 1rem;
  }

  .body {
    grid-area: body;
    text-align: left;
    padding-top: 1rem;
  }
`
export const StyledModalFooter = styled.div``
