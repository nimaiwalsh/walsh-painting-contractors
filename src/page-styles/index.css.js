import styled from 'react-emotion'
import { BREAKPOINTS } from '../utils/theme'

const IndexPageContainer = styled('section')`

  .gatsby-image-outer-wrapper {
    height: 100%;
  }

  .image {
    max-height: 80rem;
    height: calc(100vh - 137px);
    @media only screen and (max-width: ${BREAKPOINTS.largest}) {
      height: calc(100vh - 137px);
      max-height: none;
    }
    @media only screen and (max-width: ${BREAKPOINTS.large}) {
      height: calc(100vh - 109px);
      max-height: none;
    }
    @media only screen and (max-width: ${BREAKPOINTS.medium}) {
      height: calc(100vh - 150px);
      max-height: none;
    }
    @media only screen and (max-width: ${BREAKPOINTS.small}) {
      height: calc(100vh - 160px);
      max-height: none;
    }
  }
`

export default IndexPageContainer