import styled from 'react-emotion'
import { COLOURS, BREAKPOINTS } from '../utils/theme'

export const ContactPageContainer = styled('section')``

export const FormContainer = styled('div')`
  position: relative;
  width: 100%;
  background-image: linear-gradient(
      105deg,
      rgba(${COLOURS.primaryDarkRGB}, 0.9) 0%,
      rgba(${COLOURS.primaryLightRGB}, 0.9) 50%,
      transparent 50%
    );
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba(${COLOURS.colorBlackRGB}, 0.3);
  overflow: hidden;
`

export const FormBackgroundImage = styled('div')`
  position: absolute;
  width: 100%;
  height: 100%;
  background-position: 100%;
  top: 0;
  left: 0;
  z-index: -99;

  & .gatsby-image-outer-wrapper,
  & .gatsby-image-wrapper {
    height: 100%;
  }
`

export const Form = styled('form')`
  width: 70%;
  padding: 3rem;
  input,
  textarea {
    display: block;
  }
  @media (max-width: ${BREAKPOINTS.medium}) {
      width: 100%;
    }
`

export const FormGroup = styled('div')`
  & :not(:last-child) {
    margin-bottom: 2rem;
    font-size: inherit;
  }

  input,
  textarea {
    font-family: inherit;
    color: inherit;
    font-size: 1.2rem;
    padding: 1.5rem 2rem;
    border-radius: 2px;
    background-color: rgba(${COLOURS.whiteRGB}, 0.9);
    border: none;
    border-bottom: 3px solid transparent;
    width: 90%;
    display: block;
    transition: all 0.3s;

    & ::placeholder {
      color: ${COLOURS.greyDark2};
    }
  }

  input:focus,
  textarea:focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(${COLOURS.blackRGB}, 0.1);
    border-bottom: 3px solid ${COLOURS.primaryDark};
  }

  input:focus:invalid,
  textarea:focus:invalid {
    border-bottom: 3px solid ${COLOURS.primaryLight};
  }

  label {
    font-size: 1.2rem;
    font-weight: 700;
    margin-left: 2rem;
    margin-top: 0.7rem;
    display: block;
    transform: translateY(0);
    transition: all 0.3s;
  }

  /*hide label when placeholder is visible before
  anything is enetered into the input
  */
  input:placeholder-shown + label {
    opacity: 1;
    visibility: hidden;
    transform: translateY(-4rem);
  }
`
