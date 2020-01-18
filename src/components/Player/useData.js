import { useState, useEffect } from 'react'
import jsmediatags from 'jsmediatags'

function useData(source) {
  const [id3Data, setId3Data] = useState({ tags: [] })
  const [pictureData, setPictureData] = useState({ data: [] })

  useEffect(() => {
    const audio = document.getElementById('PLAYER'),
      targetUrl = source,
      proxyUrl = 'https://cors-anywhere.herokuapp.com/'

    const tagList = async () => {
      await jsmediatags.read(proxyUrl + targetUrl, {
        onSuccess: function(data) {
          setId3Data(data.tags)
          setPictureData(data.tags.picture.data)
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
    pictureData,
  }
}

export default useData
