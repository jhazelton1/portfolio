import React, { Component } from 'react'
import Card from './Card'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

class Portfolio extends Component {
  render () {
    return (
      <Div>
        <h1> Portfolio</h1>
        <h2>Old Portfolio... New Work Coming Soon</h2>
        <Row>
          <Card
            href='https://github.com/cooksystemsinc/js-assessment-dev-duel-jhazelton1'
            src={require('../Images/devDuelProject.png')}
            text='Dev Duel'
          />
          <Card
            href='https://codepen.io/jhazelton1/full/NypLmq/'
            src={require('../Images/twitchProject.png')}
            text='Twitch API'
          />
          <Card
            href='https://github.com/jhazelton1/js-assignment-quizler-jhazelton1'
            src={require('../Images/javascriptQuizCli.png')}
            text='Javascript Quiz CLI'
          />
        </Row>
        <Row>
          <Card
            src={require('../Images/twitterProject.png')}
            href='https://github.com/cooksystemsinc/social-media-assessment-jhazelton1'
            text='Spring Social Media Clone'
          />
          <Card
            src={require('../Images/xmlJAXBProject.png')}
            href='https://github.com/jhazelton1/java-xml-file-transfer-assessment-jhazelton1'
            text='XML JAXB File Transfer'
          />
          <Card
            src={require('../Images/wikiViewerProject.png')}
            href='https://codepen.io/jhazelton1/full/aqmQqy/'
            text='Wikipedia Viewer API'
          />
        </Row>
      </Div>
    )
  }
}

export default Portfolio
