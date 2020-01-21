import React from 'react'
import ReactDOM from 'react-dom'
import Player from './components/Player/Player'

function App() {
  const text = `This could be any large body of text (e.g. lyrics/transcript) to 
be rendered by the in the components further info.`

  return (
    <div className="App">
      <Player
        source={'https://www.dropbox.com/s/1clbck0v539oldp/screams.mp3?raw=1'}
        text={text}
      />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
