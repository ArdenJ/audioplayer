import React from 'react'
import ReactDOM from 'react-dom'
import Player from './components/Player/Player'

import './styles.css'

function App() {
  return (
    <div className="App">
      <Player
        trackTitle="Track"
        id="PLAYER"
        source={
          'http://www.imgaid.com/DownloadFiles/L3ecdAWP/media.io_Figment.mp3'
        }
      />
      <br />
      <img
        style={{ width: '100vw' }}
        src="https://thefilmstage.com/wp-content/uploads/2016/05/Anna-Karina-3-e1462387084990.png"
      />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
