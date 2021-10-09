import React from "react";
import "./Input.scss";

interface IInputProps {
  children: string | number;
  type?: string;
}

export const Input: React.FC<IInputProps> = ({
  children,
  type = "text",
}: IInputProps) => {
  return <input className="ipt" type={type} value={children} />;
};
