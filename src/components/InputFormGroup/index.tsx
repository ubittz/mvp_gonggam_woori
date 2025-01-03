import React, { useState, useRef } from 'react';

import styled from 'styled-components';

import { xCircleIcon } from '@@assets/icons';
import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FormGroup from '@@components/FormGroup';
import TextField from '@@components/InputFormGroup/parts/TextField';
import { InputFormGroupProps } from '@@components/InputFormGroup/types';

const StyledInputFormGroup = styled(FormGroup)`
  .input_form_group__input_wrap {
    position: relative;

    & > input {
      flex: 1;
      width: 100%;
    }

    & > button {
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
    }

    & > img {
      position: absolute;
      width: 24px;
      height: 24px;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
      cursor: pointer;
      pointer-events: all;
    }
  }
`;

function InputFormGroup({ inputProps, buttonProps, theme = 'default', showDeleteIcon = false, ...props }: InputFormGroupProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClear = () => {
    console.log('inputRef.current', inputRef.current);
    if (inputRef.current) {
      console.log('inputRef.current', inputRef.current);
      inputRef.current.value = ''; // 직접 값을 초기화
      if (inputProps.onChange) {
        inputProps.onChange({ target: inputRef.current } as React.ChangeEvent<HTMLInputElement>);
      }
    }
  };

  return (
    <StyledInputFormGroup {...props}>
      <Flex.Horizontal className='input_form_group__input_wrap'>
        <TextField
          {...inputProps}
          theme={theme}
          ref={inputRef} // input 요소에 ref 연결
          onFocus={(e) => {
            setIsFocused(true);
            if (inputProps.onFocus) inputProps.onFocus(e); // 기존 onFocus 호출
          }}
          onBlur={(e) => {
            setIsFocused(false);
            if (inputProps.onBlur) inputProps.onBlur(e); // 기존 onBlur 호출
          }}
        />
        {buttonProps && <Button.Small {...buttonProps} />}
        {showDeleteIcon && isFocused && (
          <img
            src={xCircleIcon}
            alt='delete'
            draggable={false}
            onClick={handleClear} // 값을 지우는 함수 호출
          />
        )}
      </Flex.Horizontal>
    </StyledInputFormGroup>
  );
}

export default InputFormGroup;
