import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Logo from '../images/logo.svg'

const HeaderWrapper = styled.header`
  background: #524763;
  margin-bottom: 1.45rm;
  img{
    margin-bottom: 0;
  }
  h1{
    margin: 0;
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-Width: 960px;
  padding: 0.5rem 0.5rem;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img style={{width: '100px',}} src={Logo} alt='Level Up Tutorials'/>
        </Link>
      </h1>
      <a href='/users/login'>Login</a>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
