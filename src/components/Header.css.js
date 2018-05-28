import styled from 'react-emotion'
import { COLOURS, LINE, BREAKPOINTS } from '../utils/theme'

const HeaderContainer = styled('header')`
  font-size: 1.4rem;
  height: 7rem;
  background-color: #fff;
  border-bottom: ${LINE};

  display: flex;
  justify-content: space-between;
  align-items: center;
  /*Wrap allows search to move to next row*/
  @media only screen and (max-width: ${BREAKPOINTS.smallest}) {
    flex-wrap: wrap;
    height: 11rem;
    align-content: space-around;
  } 

  .logo {
    height: 3.25rem;
    margin-left: 2rem;
  }
`

export default HeaderContainer
