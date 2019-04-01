import React, { Component } from 'react'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  min-height: 100vh;
  background-color: aliceblue;
`

const Paragraph = styled.div`
  display: flex;
  margin: 5vmin;
  text-align: center;
`

const AllListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8vmin;
`
const Aboot = styled.p`
  font-size: 8vmin;
`

const ULTitle = styled.p`
  font-size: 5vmin;
  font-weight: bold;
`
const UL = styled.ul``
const Item = styled.li`
  font-style: italic;
  font-size: 2.5vmin;
`

class About extends Component {
  render () {
    return (
      <Div>
        <Aboot>About</Aboot>
        <Paragraph>
          <p>
            Prior to becoming a programmer, I taught English three years abroad
            in South Korea. Wanting a career change and having been always
            interested in tech, I moved back to America to pursue a career in
            Software Development. I thoroughly enjoy software development full
            time and as a hobby as well. As my experience and learning mainly
            focused on programming individual pieces, recently I have focused on
            the broader architecture and SDLC methodologies as a whole.{' '}
          </p>
        </Paragraph>
        <AllListWrapper>
          <ListWrapper>
            <ULTitle>Enjoys:</ULTitle>
            <UL>
              <Item>Learning</Item>
              <Item>Different Cultures</Item>
              <Item>Iced Americanos</Item>
              <Item>Ping Pong</Item>
              <Item>Ddeokkbokki(떡볶이)</Item>
            </UL>
          </ListWrapper>
          <ListWrapper>
            <ULTitle>Titles:</ULTitle>
            <UL>
              <Item>Software Developer</Item>
              <Item>Full-Stack Developer</Item>
              <Item>Former TEFL Teacher</Item>
              <Item>First of His Name</Item>
              <Item>Gamer</Item>
            </UL>
          </ListWrapper>
          <ListWrapper>
            <ULTitle>Adjectives:</ULTitle>
            <UL>
              <Item>Curious</Item>
              <Item>Hooked</Item>
              <Item>Dedicated</Item>
              <Item>Broad</Item>
              <Item>INTP</Item>
            </UL>
          </ListWrapper>
        </AllListWrapper>
      </Div>
    )
  }
}

export default About
