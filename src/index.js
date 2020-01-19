import React from 'react'
import ReactDOM from 'react-dom'
import Player from './components/Player/Player'

function App() {
  return (
    <div className="App">
      <Player
        source={'https://www.dropbox.com/s/1clbck0v539oldp/screams.mp3?raw=1'}
        id="PLAYER"
      />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
