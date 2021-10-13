import React from 'react';
import './Input.scss';

interface IInputProps {
  children?: string | number;
  type?: string;
  placeholder?: string;
  onChange?(args?: unknown): void
}

export const Input: React.FC<IInputProps> = ({
  children,
  onChange = () => {},
  type = 'text',
  placeholder = 'type info',
}: IInputProps) => {
  return <input onChange={onChange} className="ipt" type={type} placeholder={placeholder} value={children} />;
};
