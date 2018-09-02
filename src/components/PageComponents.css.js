import { css } from 'react-emotion'
import { COLOURS, LINE, BREAKPOINTS } from '../utils/theme'

export const pageHeadStyles = css`
  display: flex;
  align-items: center;
  border-bottom: ${LINE};

  & .heading {
    font-size: 2.25rem;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 1.5rem 3rem;

    @media only screen and (max-width: ${BREAKPOINTS.small}) {
      font-size: 1.8rem;
      padding: 1.25rem 2rem;
    }
  }

  & .stars {
    /*Pushes the other flex items to the right*/
    margin-right: auto;

    display: flex;
    align-items: center;
  }

  & .icon-star,
  & .icon-location {
    width: 1.75rem;
    height: 1.75rem;
    fill: ${COLOURS.primary};
  }

  & .tab {
    background-color: ${COLOURS.primary};
    margin-left: 3rem;
    color: #fff;
    padding: 0 2.25rem;
    align-self: stretch;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: ${BREAKPOINTS.small}) {
      padding: 0 1.5rem;
    }

     & .icon-tab {
      fill: #FFF;
      width: 3rem;
      height: 3rem;
    }
  }
`
