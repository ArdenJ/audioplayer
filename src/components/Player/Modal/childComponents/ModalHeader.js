import React from 'react'

import { StyledModalHeader } from '../Modal.styled'

export default function ModalHeader({ title }) {
  return (
    <StyledModalHeader>
      <h1>{title}</h1>
    </StyledModalHeader>
  )
}
