import React, { useState } from 'react'

//Components
import { Image } from '../Image'

// Assets
import { Play } from './assets/Play'
import { Pause } from './assets/Pause'

// Styled components
import { StyledButton } from './Button.styled'

const Button = ({ playing, setPlaying, pictureData }) => {
  let [play, setPlay] = useState(false)

  function handleClick() {
    playing ? setPlaying(false) : setPlaying(true)
    setPlay(!play)
  }

  const boxSize = () => {
    if (window.innerWidth <= 699) {
      return '30'
    } else {
      return '40'
    }
  }

  return (
    <StyledButton onClick={handleClick}>
      <div className="image">
        <Image pictureData={pictureData} />
      </div>
      <div className="playPause">
        {play ? <Pause boxSize={boxSize()} /> : <Play boxSize={boxSize()} />}
      </div>
    </StyledButton>
  )
}

export default Button

// DON'T PROP DRILL - USE CONTEXT INSTeAD
