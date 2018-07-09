import styled from 'react-emotion'
import { COLOURS, LINE, BREAKPOINTS } from '../utils/theme'

const HeaderContainer = styled('header')`
  font-size: 1.4rem;
  height: auto;
  background-color: #fff;
  border-bottom: ${LINE};

  .logo {
    height: 14rem;
    padding: 1rem;
    margin-left: -5rem;
  }

  @media only screen and (max-width: ${BREAKPOINTS.medium}) {
    display: flex;
    justify-content: center;

    .logo {
      height: 12rem;
    }
  } 

  @media only screen and (max-width: ${BREAKPOINTS.large}) {
    .logo {
      margin-left: -7rem;
    }
  }

`

export default HeaderContainer
