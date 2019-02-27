import React, { Component } from 'react'
import styled from 'styled-components'

const Div = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
`

const Avatar = styled.img`
  border-radius: 50%;
`

const Name = styled.p`
  font-size: 3vw;
  margin: 1vw;
`
const Title = styled.p`
  font-size: 2vw;
  margin: 1vw;
`

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      state: 'Hello World'
    }
  }

  render () {
    return (
      <Div>
        <Avatar src={this.props.src} />
        <Name>{this.props.name}</Name>
        <Title>{this.props.title}</Title>
      </Div>
    )
  }
}

export default Home
