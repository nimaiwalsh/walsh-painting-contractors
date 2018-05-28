import { css } from 'react-emotion'
import { COLOURS, BREAKPOINTS } from '../utils/theme' 

const styles = css`
 padding: 3.5rem 0;
 text-align: center;

  @media only screen and (max-width: ${BREAKPOINTS.medium}) {
    padding: 2.5rem 0;
  }

 .book-now {
   font-size: 2rem;
   font-weight: 300;
   text-transform: uppercase;
   margin-bottom: 2.5rem;
 }

 .btn {
   font-size: 1.5rem;
   font-weight: 300;
   text-transform: uppercase;
   border-radius: 100px;
   border: none;
   background-image: linear-gradient(to right, ${COLOURS.primaryLight}, ${COLOURS.primaryDark});
   color: #FFF;
   position: relative;
   /*set overflow to hidden so button invisible text does not show*/
   overflow: hidden;
   cursor: pointer;

   & > * {
     display: inline-block;
     height: 100%;
     width: 100%;
     transition: all .2s;
   }

   &__visible {
     padding: 2rem 7.5rem;
   }

   &__invisible {
     position: absolute;
     padding: 2rem 0;
     left: 0;
     top: -100%; 
   }

   &:focus {
     outline: none;
   }

   &:hover {
    background-image: linear-gradient(to left, ${COLOURS.primaryLight}, ${COLOURS.primaryDark});
   }

   &:hover .btn__visible {
     /*move the exact height of parent down the y axis*/
     transform: translateY(100%);
   }

   &:hover .btn__invisible {
     top: 0;
   }
 }
`

export default styles;