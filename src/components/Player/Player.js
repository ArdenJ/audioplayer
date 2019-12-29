import React, { useState } from 'react'

//Components
import Bar from './Bar/Bar'
import Button from './Button/Button'

//StyledComponents
import { StyledPlayerContainer } from './Player.styled'

// Hooks
import usePlayer from './usePlayer'
import useData from './useData'
import useAvgColor from './useAvgColor'

const Player = ({ trackTitle, source }) => {
  const {
    currentPlayTime,
    duration,
    playing,
    setPlaying,
    setCurrentPlayTime,
  } = usePlayer()

  const { rgb, imgUrl } = useAvgColor()

  // get ID3 v2 data from track
  const { id3Data, rawId3Data } = useData(source)
  console.log('FROM PLAYER ' + id3Data)

  return (
    <StyledPlayerContainer rgb={rgb} imgUrl={imgUrl}>
      {/* Entry point */}
      <audio id={'PLAYER'} src={source} />

      {/* Button */}
      <div className="buttonContainer">
        <div className="trackImage" hidden>
          TRACK IMAGE
        </div>
        <div className="controls">
          <Button playing={playing} setPlaying={setPlaying} />
          {/* TODO: Fast-forward and rewind */}
        </div>
      </div>

      {/* Info */}
      <div className="infoContainer">
        <div className="trackInfo">
          {/* TITLE */}
          <div className="trackTitle">{trackTitle}</div>
          {/* ARTIST */}
          <div className="trackArtist">trackArtist</div>
          {/* BAR AND TIME */}
          <div className="bar">
            <Bar currentPlayTime={currentPlayTime} duration={duration} />
          </div>
        </div>
      </div>
    </StyledPlayerContainer>
  )
}

export default Player
