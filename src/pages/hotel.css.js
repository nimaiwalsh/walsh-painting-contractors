import styled from 'react-emotion'
import { COLOURS, LINE, BREAKPOINTS } from '../utils/theme'

const PageContainer = styled('div')`
  /*GALLERY SECTION*/
  .gallery {
    display: flex;

    &__item {
      width: 100%;
      display: block;
    }
  }

  /*OVERVIEW SECTION*/
  .overview {
    display: flex;
    align-items: center;
    border-bottom: ${LINE};

    &__heading {
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

    &__stars {
      /*Pushes the other flex items to the right*/
      margin-right: auto;
      
      display: flex;
      align-items: center;
    }

    &__icon-star,
    &__icon-location {
      width: 1.75rem;
      height: 1.75rem;
      fill: ${COLOURS.primary};
    }

    &__location {
      font-size: 1.2rem;
      display: flex;
      vertical-align: center;

    }

    &__icon-location {
      margin-right: 0.5rem;
    }

    &__rating {
      background-color: ${COLOURS.primary};
      margin-left: 3rem;
      color: #FFF;
      padding: 0 2.25rem;
      align-self: stretch;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @media only screen and (max-width: ${BREAKPOINTS.small}) {
        padding: 0 1.5rem;
      }   
    }

    &__rating-average {
      font-size: 2.25rem;
      font-weight: 300;
      margin-bottom: -3px;

      @media only screen and (max-width: ${BREAKPOINTS.small}) {
        font-size: 1.8rem;
      }   
    }

    &__rating-count {
      font-size: .8rem;
      text-transform: uppercase;

      @media only screen and (max-width: ${BREAKPOINTS.small}) {
        font-size: 0.5rem;
      }  
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
      height: 4.5rem;
      width: 4.5rem;
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

    &__user-date {
      font-size: 1rem;
      color: ${COLOURS.greyDark2};
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
export default PageContainer