import styled from 'styled-components';

import signUpBackgroundImg from '../../assets/sign-up-background.png'

import {shade} from 'polished'

export const Container = styled.div`

  /*Vh is view height, neste caso 100 esta ocupando 100% do vh disponivel*/
  height: 100vh;
  display: flex;
  align-items: stretch;
`;


export const Content = styled.main`

  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;

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

    color:  #f4ede8;
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
        color: ${shade(0.3, '#f4ede8')};
      }

  }

`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;

`;
