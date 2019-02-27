import React, { Component } from 'react'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const IFrame = styled.iframe`
  min-height: 95vh;
  border: none;
  margin: 0;
`

class Resume extends Component {
  componentDidMount () {
    let x = window.resume.document.getElementsByTagName('body')[0]
    x.style.margin = '0'
    console.log(x)
  }
  render () {
    return (
      <Div>
        <h1>Resume</h1>

        <IFrame
          style={{ width: '80%' }}
          name='resume'
          src='https://docs.google.com/document/d/e/2PACX-1vQrFDAcAPNoWs1wyFZ8qjj7P2T6JjeQHoxn5JghlED5jEda9j36mOGlUclClSRS0cZ65eDGgdIAMH5T/pub?embedded=true'
        />
      </Div>
    )
  }
}

export default Resume
