import React from 'react'
import ReactDOM from 'react-dom'

// Components
import ModalHeader from './childComponents/ModalHeader'
import ModalBody from './childComponents/ModalBody'
import ModalFooter from './childComponents/ModalFooter'

//Styled Components
import { StyledModal } from './Modal.styled'

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <StyledModal>
            <div className="modalOverlay" />
            <div className="modalWrapper">
              <div className="modal">
                <div
                  className="modalHeader"
                  style={{ display: 'grid', gridTemplateColumns: 'auto 5rem' }}
                >
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
          </StyledModal>
        </React.Fragment>,
        document.body,
      )
    : null

export default Modal
