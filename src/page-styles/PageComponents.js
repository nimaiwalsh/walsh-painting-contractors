import React from 'react'
import styled from 'react-emotion'
import { COLOURS, LINE, BREAKPOINTS } from '../utils/theme'
import { moveInBottom } from '../utils/animations'

export const PageContainer = styled('div')`
  background-color: ${COLOURS.greyLight1};
  position: relative;
  height: 100%;
`

export const PageContentContainer = styled('div')`
  font-size: 1.4rem;
  display: flex;
  padding: 4.5rem;
  border-bottom: ${LINE};
  margin: 2rem 0;

  /*Ensure the larger breakpoint is first if you have 2 of the same properties*/
  @media only screen and (max-width: ${BREAKPOINTS.large}) {
  }
  
  @media only screen and (max-width: ${BREAKPOINTS.medium}) {
    padding: 3rem;
  }

  @media only screen and (max-width: ${BREAKPOINTS.small}) {
    flex-direction: column;
  }
`

export const Button = styled('button')`
  &,
  &:link,
  &:visited {
    position: relative;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: 10rem;
    margin-top: 2rem;
    background-color: ${props =>
      props.white ? `${COLOURS.white}` : props.primary ? `${COLOURS.primary}` : ''};
    color: ${props =>
      props.white ? `${COLOURS.greyDark1}` : props.primary ? `${COLOURS.white}` : ''};
    transition: all 0.2s;
    animation: ${props =>
      props.animated ? `${moveInBottom} .5s ease-out .75s` : ''};
    /*Ensures the first keyframe is applied before animation*/
    animation-fill-mode: backwards;
  }

  /*For Button element below*/
    border: none;
    cursor: pointer;

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }
  /*Pressed*/
  &:active,
  &:focus {
    outline: none;
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }

  /*Radiating glow effect*/
  &::after {
    content: '';
    display: inline-block;
    height: 100%; /*Same height/width of parent button*/
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: ${props =>
      props.white ? `${COLOURS.white}` : props.primary ? `${COLOURS.primary}` : ''};
    transition: all 0.2s;
  }

  &:hover::after {
    transform: scale(1.5);
    opacity: 0;
  }
`


