import React from 'react'

import { StyledModalBody } from '../Modal.styled'
import { Image } from '../../Image'

function ModalBody(props) {
  const { pictureData, artist, text } = props

  const Info = () => {
    return artist !== undefined ? <h2>{artist}</h2> : <></>
  }

  const Text = () => {
    return text !== undefined ? <p>{text}</p> : <></>
  }

  return (
    <StyledModalBody>
      <div className="image">
        <Image pictureData={pictureData} />
      </div>
      <div className="info">
        <Info />
      </div>
      <div className="body">
        <Text />
      </div>
    </StyledModalBody>
  )
}
export default ModalBody
