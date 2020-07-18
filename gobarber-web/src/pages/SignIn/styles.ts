import styled, {keyframes} from 'styled-components';

import signInBackgroundImg from '../../assets/sign-in-background.png'

import {shade} from 'polished'

export const Container = styled.div`

  /*Vh is view height, neste caso 100 esta ocupando 100% do vh disponivel*/
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }

`;

export const Content = styled.main`

  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;



`;

export const AnimationContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.4s;

      &:hover {
        color: ${shade(0.3, '#f4ede8')};
      }
    }
  }

  > a {

    color: #FF9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.4s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
        color: ${shade(0.3, '#FF9000')};
      }

  }

`;


export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;

`;
