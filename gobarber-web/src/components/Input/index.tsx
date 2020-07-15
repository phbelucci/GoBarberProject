import React, {InputHTMLAttributes, useEffect, useRef, useState, useCallback } from 'react';
import {Container, Error} from './styles';
import { IconBaseProps } from 'react-icons/lib';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input : React.FC<InputProps> = ({name, icon: Icon,  ...rest}) => {

  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  //useCallback não irá recriar a função cada vez que o componente for chamado
  //Devemos usar o useCallBack sempre que criarmos uma outra função dentro um component
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);

  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  useEffect(() => {

      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'value',
      });



  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20}/>}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef} {...rest}
      />
      {error &&
        <Error title={error}>
          <FiAlertCircle color='#c53030' size={20}/>
        </Error>
      }
    </Container>
    )
};

export default Input;
