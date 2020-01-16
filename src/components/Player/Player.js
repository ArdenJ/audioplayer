import React from 'react'
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
import useAvgColor from './useAvgColor'

const Player = ({ source, image, trackTitle, trackArtist }) => {
  const { currentPlayTime, duration, playing, setPlaying } = usePlayer(),
    { rgb } = useAvgColor(source),
    { id3Data } = useData(source)
  // const thisSHit = console.log(theData)

  console.log(id3Data)
  const { title, artist, picture } = id3Data
  // This will need to be extracted
  // dataArray = new Uint8ClampedArray(data),
  // width = 'width'
  console.log(picture)
  //   imgData = ImageData(dataArray, width)
  // console.log(imgData)
  // imageDta - array of RGBa data array
  // Canvas will draw the shit - imageData is part of Canvas

  return (
    <StyledPlayerContainer rgb={rgb} tags={'butts'} image={image}>
      {/* Entry point */}
      <audio id={'PLAYER'} src={source} />

      {/* Button */}
      <div className="buttonContainer">
        <div className="controls">
          <Button playing={playing} setPlaying={setPlaying} image={image} />
        </div>
      </div>

      {/* Info */}
      <div className="infoContainer">
        <div className="trackInfo">
          {/* TITLE */}
          <div className="trackTitle">
            {trackTitle || title || `Not loading`}
          </div>
          {/* ARTIST */}
          <div className="trackArtist">{trackArtist || artist || `ughhhh`}</div>
          <div className="bar">
            <Bar currentPlayTime={currentPlayTime} duration={duration} />
          </div>
        </div>
        <div className="moreInfo">
          {/* Sinful - difine this better */}
          <Info heightWidth={'1rem'} />
          <div className="tooltip">
            {/* RENAME */}
            <Tooltip trackTitle={trackTitle} trackArtist={trackArtist} />
          </div>
        </div>
      </div>
    </StyledPlayerContainer>
  )
}

export default Player

Player.propTypes = {
  source: PropTypes.string.isRequired,
  image: PropTypes.string,
  trackTitle: PropTypes.string,
  trackArtist: PropTypes.string,
}
