import { useState, useEffect } from 'react'
import jsmediatags from 'jsmediatags'

function useData(source) {
  const [id3Data, setId3Data] = useState({ tags: [] })

  useEffect(() => {
    const audio = document.getElementById('PLAYER'),
      targetUrl = source,
      proxyUrl = 'https://cors-anywhere.herokuapp.com/'

    const tagList = async () => {
      await jsmediatags.read(proxyUrl + targetUrl, {
        onSuccess: function(data) {
          setId3Data(data.tags)
        },
        onError: error => {
          setId3Data(error)
        },
      })
    }

    const setId3 = () => tagList()
    audio.addEventListener('loadeddata', setId3)

    return () => {
      audio.removeEventListener('loadeddata', setId3Data)
    }
  })

  return {
    id3Data,
  }
}

export default useData
