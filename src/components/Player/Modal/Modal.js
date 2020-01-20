import React from 'react'
import ReactDOM from 'react-dom'

// Components
import ModalHeader from './childComponents/ModalHeader'
import ModalBody from './childComponents/ModalBody'
import ModalFooter from './childComponents/ModalFooter'

import { Image } from '../Image'

//Styled Components
import { StyledModal } from './Modal.styled'

const ModalComponent = ({ isShowing, hide, pictureData, title, artist }) => {
  return (
    <React.Fragment>
      <StyledModal>
        <div className="modalOverlay" />
        <div className="modalWrapper">
          <div className="modal">
            <Image pictureData={pictureData} />
            <div className="container">
              <div className="modalHeader">
                <ModalHeader title="h11o" />
                <div className="button">
                  <button type="button" onClick={hide}>
                    <span>&times;</span>
                  </button>
                </div>
              </div>
              <div className="modalBody">
                <ModalBody />
              </div>
              <div className="modalFooter">
                <ModalFooter />
              </div>
            </div>
          </div>
        </div>
      </StyledModal>
    </React.Fragment>
  )
}

const Modal = ({ isShowing, hide, pictureData, title, artist }) =>
  isShowing
    ? ReactDOM.createPortal(
        <ModalComponent
          isShowing={isShowing}
          hide={hide}
          pictureData={pictureData}
          title={title}
          artist={artist}
        />,
        document.body,
      )
    : null

export default Modal
