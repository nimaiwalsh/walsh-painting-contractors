import styled from 'react-emotion'
import { COLOURS, LINE, BREAKPOINTS } from '../utils/theme'

const AboutPageContainer = styled('section')`
  /*GALLERY SECTION*/
  .gallery {
    display: flex;

    &__item {
      width: 100%;
      display: block;
    }
  }
  
  /*DETAIL SECTION*/
  .detail {
    font-size: 1.4rem;
    display: flex;
    padding: 4.5rem;
    background-color: ${COLOURS.greyLight1};
    border-bottom: ${LINE};

    /*Ensure the larger breakpoint is first if you have 2 of the same properties*/
    @media only screen and (max-width: ${BREAKPOINTS.medium}) {
      padding: 3rem;
    }

    @media only screen and (max-width: ${BREAKPOINTS.small}) {
      flex-direction: column;
    }
  }

  .description {
    background: #FFF;
    box-shadow: ${COLOURS.shadowLight};
    
    padding: 3rem;
    flex: 0 0 60%;
    margin-right: 4.5rem;

    @media only screen and (max-width: ${BREAKPOINTS.medium}) {
      padding: 2rem;
      margin-right: 3rem;
    }

    @media only screen and (max-width: ${BREAKPOINTS.small}) {
      margin-right: 0;
      margin-bottom: 3rem;
    }
  }

  .user-reviews {
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .recommend {
    font-size: 1.3rem;
    color: ${COLOURS.greyDark3};

    display: flex;
    align-items: center;

    &__count {
      margin-right: auto;
    }

    &__friends {
      display: flex;
    }

    & img {
      box-sizing: content-box;
      height: 4rem;
      width: 4rem;
      border-radius: 50%;
      border: .3rem solid #FFF;
      /*overlap images*/
      &:not(:last-child) {
        margin-right: -2rem;
      }
    }
  }

  /*USER REVIEWS*/
  .review {
    background-color: #FFF;
    box-shadow: ${COLOURS.shadowLight};
    padding: 3rem;
    margin-bottom: 3.5rem;
    position: relative;
    overflow: hidden;

    @media only screen and (max-width: ${BREAKPOINTS.medium}) {
      padding: 2rem;
      margin-bottom: 3rem;
    }

    &__text {
      position: relative;
      z-index: 2;
    }

    &__user {
      margin-top: 3rem;
      display: flex;
      align-items: center;
    }

    &__photo {
      height: 6rem;
      width: 6rem;
      border-radius: 50%;
      margin-right: 1.5rem;
    }

    &__user-box {
      margin-right: auto;
    }

    &__user-name {
      text-transform: uppercase;
      font-weight: 600;
      font-size: 1.1rem;
      margin-bottom: .4rem;
    }

    &__user-site {
      font-size: 1.5rem;
      color: ${COLOURS.greyDark2};
      a:active, 
      a:link,
      a:visited {
        color: ${COLOURS.primary};
      }
    }

    &__rating {
      color: ${COLOURS.primary};
      font-size: 2.5rem;
    }

    &::before {
      content: "\\201C";
      position: absolute;
      top: -2.75rem;
      left: -1rem;
      font-size: 20rem;
      color: ${COLOURS.greyLight2};
      line-height: 1;
      font-family: sans-serif;
      z-index: 1;
    }
  }
`
export default AboutPageContainer