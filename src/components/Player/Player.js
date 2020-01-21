import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

//Components
import { Button, Bar, Modal } from './index'

//Assets
import { Info } from './assets/Info'

//StyledComponents
import { theme } from '../../styling/theme'
import { GlobalStyles } from '../../styling/global'
import { StyledPlayerContainer } from './Player.styled'

// Hooks
import usePlayer from './usePlayer'
import useData from './useData'
import useModal from './Modal/useModal'

const Player = ({ text, source, trackTitle, trackArtist }) => {
  // Define a ref to be used for the component
  const n = Math.round(Math.random() * 100000000)
  const hex = n.toString(16)
  const id = useRef(hex)

  // Hooks
  const { currentPlayTime, duration, playing, setPlaying } = usePlayer(id)
  const { id3Data, pictureData } = useData({ source, id })
  const { isShowing, toggle } = useModal()

  // Destructure properties to be displayed from tag data
  const { title, artist } = id3Data

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledPlayerContainer>
        {/* An HTML audio component is rendered in the DOM */}
        <audio ref={id} src={source} />

        {/* Button component is passed the PLay/Pause state of the 
        audio and ArrayBuffer embedded in the audio file */}
        <div className="buttonContainer">
          <Button
            playing={playing}
            setPlaying={setPlaying}
            pictureData={pictureData}
          />
        </div>

        {/* Info container displays contains user defined or embedded data about audio file */}
        <div className="infoContainer">
          <div className="trackInfo">
            {/* Track Title in varying orders of specificity => named by user as 
            props on Player component => ID3 embedded data => 'unknown' */}
            <div className="trackTitle">{trackTitle || title || 'Unknown'}</div>
            {/* Artist Name ibid. */}
            <div className="trackArtist">
              {trackArtist || artist || 'Unknown'}
            </div>
            <div className="bar">
              <Bar currentPlayTime={currentPlayTime} duration={duration} />
            </div>
          </div>
          <div className="moreInfo">
            {/* Sinful - define this better */}
            {/* Info component opens up a modal in which further data about the viewed */}
            <button onClick={toggle}>
              <Info heightWidth={'1rem'} />
            </button>
          </div>
        </div>
      </StyledPlayerContainer>
      <Modal
        text={text}
        isShowing={isShowing}
        hide={toggle}
        pictureData={pictureData}
        title={title}
        artist={artist}
      />
    </ThemeProvider>
  )
}

export default Player

Player.propTypes = {
  source: PropTypes.string.isRequired,
  image: PropTypes.string,
  trackTitle: PropTypes.string,
  trackArtist: PropTypes.string,
  text: PropTypes.string,
}
