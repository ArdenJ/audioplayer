import React from 'react'
import ReactDOM from 'react-dom'

// Components
import ModalHeader from './childComponents/ModalHeader'
import ModalBody from './childComponents/ModalBody'

import { Image } from '../Image'

//Styled Components
import { StyledModal } from './Modal.styled'

const ModalComponent = ({
  text,
  isShowing,
  hide,
  pictureData,
  title,
  artist,
}) => {
  return (
    <React.Fragment>
      <StyledModal>
        <div className="modalOverlay" />
        <div className="modalWrapper">
          <div className="modal">
            <Image pictureData={pictureData} />
            <div className="container">
              <div className="modalHeader">
                <ModalHeader title={title} />
                <div className="button">
                  <button type="button" onClick={hide}>
                    <span>&times;</span>
                  </button>
                </div>
              </div>
              <div className="modalBody">
                <ModalBody
                  title={title}
                  artist={artist}
                  pictureData={pictureData}
                  text={text}
                />
              </div>
            </div>
          </div>
        </div>
      </StyledModal>
    </React.Fragment>
  )
}

const Modal = ({ text, isShowing, hide, pictureData, title, artist }) =>
  isShowing
    ? ReactDOM.createPortal(
        <ModalComponent
          text={text}
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
