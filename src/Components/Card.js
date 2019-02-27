import React, { Component } from 'react'
import styled from 'styled-components'

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: tomato;
  border-radius: 10%;
  z-index: 1;
`

const IndividualCard = styled.div`
  padding: 10px;
  margin: 30px;
  border-radius: 10%;
  position: relative;
  width: 50%;
  min-width: 350px;
  max-width: 400px;

  &:hover {
    ${Overlay} {
      opacity: 0.9;
    }
  }
`

const Img = styled.img`
  height: auto;
  width: 100%;
  display: block;
  border-radius: 10%;
  box-shadow: 0px 0px 10px black;
`

const Text = styled.div`
  color: white;
  text-shadow: 0px 0px 6px black;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
`

class Card extends Component {
  render () {
    return (
      <IndividualCard className='card'>
        <a href={this.props.href}>
          <Img alt={this.props.alt} src={this.props.src} />
          <Overlay className='overlay'>
            <Text className='text'>{this.props.text}</Text>
          </Overlay>
        </a>
      </IndividualCard>
    )
  }
}

export default Card
