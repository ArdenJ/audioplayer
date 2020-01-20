import styled from 'styled-components'

export const StyledModal = styled.div`
  /* Defaults */
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;

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
    background: white;
    position: relative;
    margin: 1.75rem auto;
    border-radius: 3px;
    max-width: 500px;
    padding: 2rem;
  }

  .modalHeader {
  }

  .button {
  }

  .button button {
  }

  .button button span {
  }
`

export const StyledModalHeader = styled.div``
export const StyledModalBody = styled.div``
export const StyledModalFooter = styled.div``
