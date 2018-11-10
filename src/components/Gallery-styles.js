import styled from 'react-emotion'
import { COLOURS, BREAKPOINTS } from '../utils/theme' 

export const GridContainer = styled('div')`
  width: 100%;
`

export const Grid = styled('div')`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
  grid-auto-rows: auto;

  & .gatsby-image-outer-wrapper,
    .gatsby-image-wrapper {
    height: 100%;
  }
`

