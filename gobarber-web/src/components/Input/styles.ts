import styled, { css } from 'styled-components';
import Tooltip from '../../components/Tooltip'

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;

}

export const Container = styled.div<ContainerProps>`

  display: flex;
  align-items: center;
  background: #232129;
  border-radius: 10px;
  border: 3px solid #232129;
  color: #666360;
  padding: 16px;
  width: 100%;


  & + div {
    margin-top: 8px;
  }

  ${props => props.isErrored && css`
    border-color:  #c53030;
    color: #ff9000;
  `}

  ${props => props.isFocused && css`
    border-color:  #ff9000;
    color: #ff9000;
  `}

  ${props => props.isFilled && css`
    color: #ff9000;
  `}

  input {
    background: transparent;
    border: 0;
    flex: 1;
    color: #f4ede8;

    &::placeholder{
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  width: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
