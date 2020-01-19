import React, { useRef } from 'react'
import PropTypes from 'prop-types'

//Components
import Button from './Button/Button'
import Bar from './Bar/Bar'
import Tooltip from './Tooltip/Tooltip'

//Assets
import { Info } from './assets/Info'

//StyledComponents
import { StyledPlayerContainer } from './Player.styled'

// Hooks
import usePlayer from './usePlayer'
import useData from './useData'

const Player = ({ source, trackTitle, trackArtist }) => {
  const n = Math.round(Math.random() * 100000000)
  const hex = n.toString(16)
  const id = useRef(hex)

  const { currentPlayTime, duration, playing, setPlaying } = usePlayer(id)
  const { id3Data, pictureData } = useData({ source, id })
  const { title, artist } = id3Data

  return (
    <>
      <StyledPlayerContainer>
        {/* An HTML audio component is rendered in the DOM */}
        <audio ref={id} src={source} />

        {/* Button component is passed the PLay/Pause state of the 
        audio and ArrayBuffer embedded in the audio file */}
        <div className="buttonContainer">
          <div className="controls">
            <Button
              playing={playing}
              setPlaying={setPlaying}
              pictureData={pictureData}
            />
          </div>
        </div>

        {/* Info container displays contains user defined or embedded data about audio file */}
        <div className="infoContainer">
          <div className="trackInfo">
            {/* Track Title in varying orders of spcificity => named by user as 
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
            {/* Sinful - difine this better */}
            {/* Info component opens up a modal in which further data about the viewed */}
            <Info heightWidth={'1rem'} />
            <div className="tooltip">
              {/* A second button that opens up a modal containing information 
              about the audio when clicked */}
              <Tooltip trackTitle={trackTitle} trackArtist={trackArtist} />
            </div>
          </div>
        </div>
      </StyledPlayerContainer>
    </>
  )
}

export default Player

Player.propTypes = {
  source: PropTypes.string.isRequired,
  image: PropTypes.string,
  trackTitle: PropTypes.string,
  trackArtist: PropTypes.string,
}
