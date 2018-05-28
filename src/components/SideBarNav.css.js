import styled from 'react-emotion'
import { COLOURS, BREAKPOINTS } from '../utils/theme'

const SideBarContainer = styled('nav')`
  background-color: ${COLOURS.greyDark1};
  /* Flex: flex-grow flex-shrink flex-basis */
  flex: 0 0 18%; 
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .side-nav {
    font-size: 1.4rem;
    list-style: none;
    margin-top: 3.5rem;

    @media only screen and (max-width: ${BREAKPOINTS.medium}) {
      display: flex;
      margin: 0;
    }

    &__item {
      position: relative;
      &:not(:last-child) {
        margin-bottom: 0.5rem;

        @media only screen and (max-width: ${BREAKPOINTS.medium}) {
          margin-bottom: 0;
        } 
      }

      @media only screen and (max-width: ${BREAKPOINTS.medium}) {
        flex: 1;
      }
    }
    
    /*Pink box for hover effect*/
    &__link::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 3px;
      background-color: ${COLOURS.primary};
      z-index: -1;
      transform: scaleY(0);
      transition: transform 0.2s, /*transform animation first*/
                  width cubic-bezier(1,0,0,1) 0.4s 0.2s, /*transiton length 0.4s delay by 0.2s*/
                  background-color 0.1s;
    }

    &__link:hover::before,
    &__link--active::before {
      transform: scaleY(1);
      width: 100%;
    }

    &__link:active::before {
      background-color: ${COLOURS.primaryLight};
    }

    &__link:link,
    &__link:visited {
      color: ${COLOURS.greyLight1};
      text-decoration: none;
      text-transform: uppercase;
      display: block;
      padding: 1.5rem 3rem;
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;

      @media only screen and (max-width: ${BREAKPOINTS.medium}) {
        justify-content: center;
        padding: 2rem;
      }

      @media only screen and (max-width: ${BREAKPOINTS.small}) {
        flex-direction: column;
        padding: 1.5rem 0.5rem;
      }   
    }

    &__icon {
      width: 1.75rem;
      height: 1.75rem;
      margin-right: 2rem;
      /* colour of parent element */
      fill: currentColor; 

      @media only screen and (max-width: ${BREAKPOINTS.small}) {
        margin-right: 0;
        margin-bottom: .7rem;
        width: 1.5rem;
        height: 1.5rem;
      }   
    }
  
  }

  .legal {
    font-size: 1.2rem;
    color: ${COLOURS.greyLight4};
    text-align: center;
    padding: 2.5rem;

    @media only screen and (max-width: ${BREAKPOINTS.medium}) {
      display: none;
    }
  }
`

export default SideBarContainer