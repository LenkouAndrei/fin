import React from 'react';
import './Button.scss';

export enum BtnShape {
    square = 'square',
    regular = 'regular',
    ellipse = 'ellispe',
    halfsquare = 'halfsquare'
};

export enum BtnSize {
    large = 'large',
    medium = 'medium',
    small = 'small'
}

interface IButtonProps {
    shape?: BtnShape;
    isOutline?: boolean;
    className?: string;
    size?: BtnSize;
    onClick?(args?: any): void;
    children: JSX.Element | string;
}

export const Button: React.FC<IButtonProps> = ({
    children,
    shape = BtnShape.regular,
    isOutline = false,
    className = '',
    size = BtnSize.medium,
    onClick = () => {}
}: IButtonProps) => {
    const resClassName = ['btn', shape, (isOutline ? 'outline' : ''), className, size].join(' ').trim();
    return <button className={resClassName} onClick={onClick}>{children}</button>
};