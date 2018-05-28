import styled from 'react-emotion'
import { CONTAINER, COLOURS, BREAKPOINTS } from '../utils/theme'

export const Container = styled('div')`
  max-width: ${CONTAINER.maxWidth};
  margin: 8rem auto; /*Centre the container*/
  background-color: ${COLOURS.greyLight2};
  box-shadow: ${COLOURS.shadowDark};

  min-height: 40rem;

  /*Media Queries*/
  @media only screen and (max-width: ${BREAKPOINTS.largest}) {
    margin: 0;
    max-width: 100%;
    width: 100%;
  }
`

export const Content = styled('div')`
  display: flex;

  @media only screen and (max-width: ${BREAKPOINTS.medium}) {
    /*side menu bar will move from side to top of screen*/
    flex-direction: column;
  }
`

export const MainContent = styled('main')`
  background-color: #FFF;
  /* flex: 1; */
  width: 82%;

  @media only screen and (max-width: ${BREAKPOINTS.medium}) {
    /*side menu bar will move from side to top of screen*/
    width: 100%;
  }
`