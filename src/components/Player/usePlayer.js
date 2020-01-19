import { useState, useEffect, useRef } from 'react'

function usePlayer(id) {
  const [playing, setPlaying] = useState(false)
  const [duration, setDuration] = useState(null)
  const [currentPlayTime, setCurrentPlayTime] = useState(null)

  useEffect(() => {
    // Set state for duration and play time when the event listener below is fired
    const audioData = () => {
      setDuration(id.current.duration)
      setCurrentPlayTime(id.current.currentTime)
    }
    const setTime = () => setCurrentPlayTime(id.current.currentTime)

    // The above-mentioned event listener
    id.current.addEventListener('loadeddata', audioData)
    id.current.addEventListener('timeupdate', setTime)

    // is audio playing
    playing ? id.current.play() : id.current.pause()

    //effect cleanup
    return () => {
      id.current.removeEventListener('loadeddata', audioData)
      id.current.removeEventListener('timeupdate', setTime)
    }
  })
  return {
    playing,
    setPlaying,
    currentPlayTime,
    setCurrentPlayTime,
    duration,
  }
}

export default usePlayer
