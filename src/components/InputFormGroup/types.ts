import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';

import { FormGroupProps } from '@@components/FormGroup/types';
import { asType } from '@@types/common';

import { TEXTFIELD_THEME } from './constants';

export type TextFieldTheme = asType<typeof TEXTFIELD_THEME>;

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  theme?: TextFieldTheme;
}

export interface LabelTextFieldProps extends TextFieldProps {
  title: string;
}

export interface InputFormGroupProps extends FormGroupProps {
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  showDeleteIcon?: boolean;
  theme?: TextFieldTheme;
}
