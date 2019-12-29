import { useState, useEffect } from 'react'
import jsmediatags from 'jsmediatags'

function useData(source) {
  const [id3Data, setId3Data] = useState([])
  // mm.fetchFromUrl(source).then(res => {
  //   console.log(res)
  // })
  useEffect(() => {
    const audio = document.getElementById('PLAYER')
    const tagList = (() => {
      jsmediatags.read(source, {
        onSuccess: function(tag) {
          return [...tag]
        },
        onError: error => {
          return `${error.type}, ${error.info}`
        },
      })
    })()

    const setId3 = () => setId3Data(tagList)

    audio.addEventListener('loadeddata', setId3)
    console.log('TAGLIST: ' + id3Data)
    return () => {
      audio.removeEventListener('loadeddata', setId3Data)
    }
  })

  return {
    id3Data,
  }
}

export default useData
