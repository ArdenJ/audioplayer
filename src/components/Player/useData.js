import { useState, useEffect, useRef } from 'react'
import jsmediatags from 'jsmediatags'

function useData({ source, id }) {
  const [id3Data, setId3Data] = useState({ tags: [] })
  const [pictureData, setPictureData] = useState({ data: [] })

  useEffect(() => {
    const targetUrl = source
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

    const tagList = () => {
      const URL_PROXY = proxyUrl + targetUrl
      new Promise((res, rej) => {
        new jsmediatags.Reader(URL_PROXY).read({
          onSuccess: data => {
            res(data)
          },
          onError: error => {
            rej(error)
          },
        })
      })
        .then(
          data => (
            setId3Data(data.tags), setPictureData(data.tags.picture.data)
          ),
        )
        .catch(error => {
          console.log(error)
        })
    }

    // const tagList = (async () => {
    //   await jsmediatags.read(proxyUrl + targetUrl, {
    // onSuccess: function(data) {
    //   setId3Data(data.tags)
    //   setPictureData(data.tags.picture.data)
    // },
    // onError: error => {
    //   setId3Data(error)
    // },
    //   })
    // })() // the eventlistener on loaded was better... maybe getting element was better option?

    const setId3 = () => tagList()
    id.current.addEventListener('loadeddata', setId3)

    return () => {
      id.current.removeEventListener('loadeddata', setId3Data)
    }
  })

  return {
    id3Data,
    pictureData,
  }
}

export default useData
