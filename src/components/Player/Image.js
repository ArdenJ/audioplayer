import React from 'react'
import useData from './useData'

export const Image = ({ source }) => {
  const child = []
  const { pictureData } = useData(source)

  if (pictureData.length > 0) {
    const arrayBuffer = new Uint8Array(pictureData)
    const arrayString = String.fromCharCode.apply(null, arrayBuffer)
    const base64String = btoa(arrayString)
    const imageSrc = 'data:image/jpg;base64,' + base64String
    child.push(<img src={imageSrc} key="1" />)
  } else {
    console.log('loading...')
  }

  return <>{child}</>
}
