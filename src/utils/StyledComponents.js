import styled, { keyframes } from 'react-emotion'
import { COLOURS, LINE } from '../utils/theme'

import icon from '../resources/images/user-1.jpg'

const pulsate = keyframes`
  0% { 
    transform: scale(1);
    box-shadow: none;
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 1rem 4rem rgba(0,0,0,.25);
  }
  100% {
    transform: scale(1);
    box-shadow: none;
  }
`

export const ButtonInline = styled('button')`
  border: none;
  color: ${COLOURS.primary};
  font-size: inherit;
  border-bottom: 1px solid currentColor; /*inherit the colour of text*/
  padding-bottom: 2px;
  display: inline-block;
  background-color: transparent;
  cursor: pointer;
  transition: all .2s;

  & span {
    margin-left: 3px;
    transition: margin-left .2s;
  }

  &:hover {
    color: ${COLOURS.greyDark1};

    span {
      margin-left: 8px;
    }
  }

  &:focus {
    outline: none;
    animation: ${pulsate} 1s infinite;
  }
`

export const Paragraph = styled('p')`
  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`

export const List = styled('ul')`
  list-style: none;
  margin: 3rem 0;
  padding: 3rem 0;
  border-top: ${LINE};
  border-bottom: ${LINE};

  display: flex;
  flex-wrap: wrap;

  & li {
    /* Display items in 2 columns  */
    flex: 0 0 50%;
    margin-bottom: .7rem;
  }

  & li svg {
    width: 1rem;
    height: 1rem;
    margin-right: 0.7rem;
    fill: ${COLOURS.primary};
  }
`