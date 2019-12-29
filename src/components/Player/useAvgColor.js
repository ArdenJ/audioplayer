import { useState, useEffect } from 'react'

function useAvgColor() {
  const [rgbR, setRgbR] = useState(0)
  const [rgbG, setRgbG] = useState(0)
  const [rgbB, setRgbB] = useState(0)
  const [rgb, setRbg] = useState(`rgb(40, 100, 90, 1)`)
  const [defaultRGB, setDefaultRgb] = useState({ r: 255, g: 255, b: 255 })

  useEffect(() => {
    let img = new Image(),
      imgUrl =
        'https://thefilmstage.com/wp-content/uploads/2016/05/Anna-Karina-3-e1462387084990.png',
      blockSize = 5,
      canvas = document.createElement('canvas'),
      ctx = canvas.getContext && canvas.getContext('2d'),
      data,
      width,
      height,
      i = -4,
      length,
      count = 0

    img.src = imgUrl

    if (!ctx) return defaultRGB

    height = img.height
    width = img.width

    ctx.drawImage(img, 0, 0)

    try {
      data = ctx.getImageData(0, 0, width, height)
    } catch (e) {
      return defaultRGB
    }

    length = data.data.length

    while ((i += blockSize * 4) < length) {
      ++count
      setRgbR += data.data[i]
      setRgbG += data.data[i + 1]
      setRgbB += data.data[i + 2]
    }

    rgbR += ~~(rgbR / count)
    rgbG += ~~(rgbG / count)
    rgbB += ~~(rgbB / count)(function setRbg() {
      ;`rgb(${rgbR}, ${rgbB}, ${rgbB}, 1`
    })()
    // Cleanup
    return () => {
      document.removeElement('canvas')
    }
  }, [rgbR, rgbG, rgbB])

  return {
    rgb,
  }
}

export default useAvgColor
