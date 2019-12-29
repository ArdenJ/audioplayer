import React from 'react'
import moment from 'moment'
import momentDurationFormat from 'moment-duration-format'

import { StyledBar } from './Bar.styled'

function Bar(props) {
  const { duration, currentPlayTime } = props
  const timePercentage = (currentPlayTime / duration) * 100
  const currentTime = () => {
    if (isNaN(currentPlayTime)) {
      return `000`
    } else {
      return Math.floor((timePercentage / 100) * duration)
    }
  }

  function formatDuration(d) {
    return moment.duration(d, 'seconds').format('mm ss', { trim: false })
  }

  return (
    <StyledBar timePercentage={timePercentage}>
      <h3 className="time">
        {formatDuration(currentTime())} / {formatDuration(duration)}
      </h3>
      <span
        className="percentageBar"
        style={{
          background: `linear-gradient(to right, orange ${timePercentage}%, white 0)`,
        }}
      />
    </StyledBar>
  )
}

export default Bar
