import React from 'react'

export const Image = props => {
  const src = []

  const { pictureData } = props

  // Koteswar Rao's Medium article helpfully demonstrated the conversion used below
  // https://medium.com/@koteswar.meesala/convert-array-buffer-to-base64-string-to-display-images-in-angular-7-4c443db242cd
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
    <img src={src[0]} alt="Track Image" style={{ maxWidth: '60px' }} />
  )
}
