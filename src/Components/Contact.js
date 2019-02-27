import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faFreeCodeCamp,
  faCodepen
} from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: aliceblue;
`
const Title = styled.p`
  font-size: 6vw;
  margin: 1vw;
`

const Email = styled.p`
  font-size: 1.5vw;
`

const FAIcon = styled(FontAwesomeIcon)`
  font-size: 12vw;
  &:hover {
    color: cornflowerblue;
  }
  cursor: pointer;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  margin: 2vh;
`
const A = styled.a`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: black;
    text-decoration: none;
  }
`

const Button = styled.span`
  font-size: 2vw;
`

const NAVLink = styled(NavLink)`
  text-decoration: underline;
  &:focus,
  &:visited,
  &:link,
  &:active {
    color: black;
  }
  &:hover {
    color: cornflowerblue;
  }
`

class Contact extends Component {
  render () {
    return (
      <Div>
        <Title>Contact</Title>
        <Email>jhazelton11@gmail.com</Email>
        <Row>
          <NAVLink to='/Resume'>
            <Button>Resume</Button>
          </NAVLink>
        </Row>
        <Row>
          <A href={'https://github.com/jhazelton1'}>
            <FAIcon icon={faGithub} />
          </A>
          <A href={'https://www.linkedin.com/in/jacob-hazelton-66916647/'}>
            <FAIcon icon={faLinkedin} />
          </A>
        </Row>
        <Row>
          <A href={'https://www.freecodecamp.org/jhazelton1'}>
            <FAIcon icon={faFreeCodeCamp} />
          </A>
          <A href={'https://www.codepen.io/jhazelton1'}>
            <FAIcon icon={faCodepen} />
          </A>
        </Row>
      </Div>
    )
  }
}

export default Contact
