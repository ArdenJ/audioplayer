import React from 'react'
import useData from './useData'

export const Image = props => {
  const src = []
  // const { pictureData } = useData({ source, id })
  const { pictureData } = props
  console.log(pictureData)

  // Koteswar Rao's Medium article helped me finally get through this!
  if (pictureData !== undefined && pictureData.length > 0) {
    const arrayBuffer = new Uint8Array(pictureData),
      arrayString = String.fromCharCode.apply(null, arrayBuffer),
      imageSrc = 'data:image/jpg;base64,' + btoa(arrayString)
    src.push(imageSrc)
  } else {
    console.log('loading...')
  }

  return src.length === 0 ? (
    <></>
  ) : (
    <img
      src={src[0]}
      alt="Track Image"
      style={{ maxWidth: '60px', overflow: 'hidden' }}
    />
  )
}
