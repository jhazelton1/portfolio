import React, { Component } from 'react'
import Home from './Components/Home'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='content'>
          <Home
            src={'https://picsum.photos/200/200/?random'}
            name={'Jacob Hazelton'}
            title={'Software Developer'}
          />
        </div>
      </div>
    )
  }
}

export default App
