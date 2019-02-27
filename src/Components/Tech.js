import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJava, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  min-height: 100vh;
`
const Technology = styled.h1`
  font-size: calc(3vw + 2px);
`

const ContentRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 1vmin;
`
const ContentRowTitleIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const ContentRowTitle = styled.p`
  font-size: calc(2.5vw + 2px);
  font-weight: bold;
`
const ContentRowContent = styled.p`
  font-size: calc(1.5vw + 2px);
  font-style: italic;
`

const ContentRowIcon = styled(FontAwesomeIcon)`
  font-size: calc(6vw + 2px);
`

class Tech extends Component {
  render () {
    return (
      <Div>
        <Technology>Technology</Technology>
        <ContentRow>
          <ContentRowTitleIconWrapper>
            <ContentRowTitle>Java</ContentRowTitle>
            <ContentRowIcon style={{ color: '#CA4626' }} icon={faJava} />
          </ContentRowTitleIconWrapper>
          <ContentRowContent>Backend/Server with Java EE</ContentRowContent>
        </ContentRow>
        <ContentRow>
          <ContentRowTitleIconWrapper>
            <ContentRowTitle>React JS</ContentRowTitle>
            <ContentRowIcon style={{ color: '#82D8F7' }} icon={faReact} />
          </ContentRowTitleIconWrapper>
          <ContentRowContent>Website Design with React JS</ContentRowContent>
        </ContentRow>
        <ContentRow>
          <ContentRowTitleIconWrapper>
            <ContentRowTitle>Spring</ContentRowTitle>
            <ContentRowIcon style={{ color: '#7DB150' }} icon={faLeaf} />
          </ContentRowTitleIconWrapper>
          <ContentRowContent>REST Services with Spring Boot</ContentRowContent>
        </ContentRow>
        <ContentRow>
          <ContentRowTitleIconWrapper>
            <ContentRowTitle>Node JS</ContentRowTitle>
            <ContentRowIcon style={{ color: '#86B554' }} icon={faNodeJs} />
          </ContentRowTitleIconWrapper>
          <ContentRowContent>JavaScript with Node JS</ContentRowContent>
        </ContentRow>
      </Div>
    )
  }
}

export default Tech
