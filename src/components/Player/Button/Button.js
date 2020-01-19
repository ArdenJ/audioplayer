import React, { useState } from 'react'

//Components
import { Image } from '../Image'

// Assets
import { Play } from './assets/Play'
import { Pause } from './assets/Pause'

// Styled components
import { StyledButton } from './Button.styled'

const Button = ({ playing, setPlaying, source, pictureData, id }) => {
  let [play, setPlay] = useState(false)

  console.log(pictureData)
  function handleClick() {
    playing ? setPlaying(false) : setPlaying(true)
    setPlay(!play)
  }
  return (
    <StyledButton onClick={handleClick}>
      <div className="image">
        <Image source={source} id={id} pictureData={pictureData} />
      </div>
      <div className="playPause">{play ? <Pause /> : <Play />}</div>
    </StyledButton>
  )
}

export default Button

// DON'T PROP DRILL - USE CONTEXT INSTeAD
