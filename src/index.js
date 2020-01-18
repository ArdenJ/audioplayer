import React from 'react'
import ReactDOM from 'react-dom'
import Player from './components/Player/Player'

import './styles.css'

function App() {
  return (
    <div className="App">
      <Player
        id="PLAYER"
        source={'https://www.dropbox.com/s/1clbck0v539oldp/screams.mp3?raw=1'}
        image={
          'https://thefilmstage.com/wp-content/uploads/2016/05/Anna-Karina-3-e1462387084990.png'
        }
      />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
