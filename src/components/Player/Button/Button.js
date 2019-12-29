import React, { useState } from 'react'

// Assets
import { Play } from './assets/Play'
import { Pause } from './assets/Pause'

// Styled components
import { StyledButton } from './Button.styled'

const Button = ({ playing, setPlaying }) => {
  let [play, setPlay] = useState(false)

  function handleClick() {
    playing ? setPlaying(false) : setPlaying(true)
    setPlay(!play)
  }
  return (
    <StyledButton onClick={handleClick}>
      {play ? <Pause /> : <Play />}
    </StyledButton>
  )
}

export default Button
