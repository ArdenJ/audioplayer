import React, { useState } from 'react'

import { StyledTooltip } from './Tooltip.styled'

// THIS WILL TAKE IN THE ID3 DATA/LYRICS AND TRANSCRIPTION
const Tooltip = props => {
  const arr = []
  for (const [key, value] of Object.entries(props)) {
    arr.push(<li key={key}>{`${key}: ${value}`}</li>)
  }
  return <StyledTooltip>{arr}</StyledTooltip>
}

export default Tooltip
