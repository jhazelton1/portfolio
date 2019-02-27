import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background-color: black;
`

const NAVLink = styled(NavLink)`
  font-size: calc(3vmin + 3px);
  text-decoration: none;
  ${props =>
    !props.isActive &&
    css`
      color: aliceblue;
    `}
`
class Nav extends Component {
  render () {
    return (
      <Navbar links={this.props.links}>
        {this.props.links.map((i, ii) => (
          <NAVLink
            key={ii}
            activeStyle={{
              color: 'cornflowerblue',
              textDecoration: 'underline'
            }}
            exact
            to={`/${i}`}
          >
            {i}
          </NAVLink>
        ))}
      </Navbar>
    )
  }
}

export default Nav
