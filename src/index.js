import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { HashRouter as Router, Route } from 'react-router-dom'
import Tech from './Components/Tech'
import Nav from './Components/Nav'
import About from './Components/About'
import Contact from './Components/Contact'
import Resume from './Components/Resume'
import Portfolio from './Components/Portfolio'

const Navbar = () => (
  <Nav links={['Home', 'Tech', 'Portfolio', 'About', 'Contact']} />
)

ReactDOM.render(
  <Router>
    <div>
      <Route
        exact
        path='/'
        component={() => (
          <div>
            <Navbar />
            <App />
          </div>
        )}
      />
      <Route
        exact
        path='/Home'
        component={() => (
          <div>
            <Navbar />
            <App />
          </div>
        )}
      />
      <Route
        exact
        path='/Tech'
        component={() => (
          <div>
            <Navbar />
            <Tech />
          </div>
        )}
      />
      <Route
        exact
        path='/Portfolio'
        component={() => (
          <div>
            <Navbar />
            <Portfolio />
          </div>
        )}
      />
      <Route
        exact
        path='/About'
        component={() => (
          <div>
            <Navbar />
            <About />
          </div>
        )}
      />
      <Route
        exact
        path='/Contact'
        component={() => (
          <div>
            <Navbar />
            <Contact />
          </div>
        )}
      />
      <Route
        exact
        path='/Resume'
        component={() => (
          <div>
            <Navbar />
            <Resume />
          </div>
        )}
      />
    </div>
  </Router>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
