import React from 'react'

import { StyledBar } from './Bar.styled'

function Bar(props) {
  const { duration, currentPlayTime } = props
  const timePercentage = (currentPlayTime / duration) * 100
  const currentTime = () => {
    if (!isNaN(currentPlayTime)) {
      return Math.floor((timePercentage / 100) * duration)
    } else {
      return '00 00'
    }
  }

  // Take in integer (time) in second and reformats value to 'mm ss' or 'hh mm ss'
  function formatTime(time) {
    const timeArr = []
    if (isNaN(time) || time < 1) {
      return '00 00'
    } else if (time >= 3600) {
      const hr = Math.floor(time / (60 * 60)).toString()
      const min = Math.round(time - hr * 60).toString()
      const sec = Math.round(time - hr - min * 60).toString()
      timeArr.push(hr, min, sec)
    } else {
      const min = Math.floor(time / 60).toString()
      const sec = Math.round(time - min * 60).toString()
      timeArr.push(min, sec)
    }

    const formattedTime = timeArr.map(i => {
      if (i.length < 2) {
        return `0${i}`
      } else {
        return i
      }
    })

    return formattedTime.length === 3
      ? `${formattedTime[0]} ${formattedTime[1]} ${formattedTime[2]}`
      : `${formattedTime[0]} ${formattedTime[1]}`
  }

  return (
    <StyledBar timePercentage={timePercentage}>
      <h3 className="time">
        {formatTime(currentTime())} / {formatTime(duration)}
      </h3>
      <span
        className="percentageBar"
        style={{
          background: `linear-gradient(to right, #000 ${timePercentage}%, #ddd 0)`,
        }}
      />
    </StyledBar>
  )
}

export default Bar
