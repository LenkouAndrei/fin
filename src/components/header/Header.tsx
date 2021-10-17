import React from 'react';
import './Header.scss';

interface IHeader {
  spent: number;
  restSum: number;
}

export const Header: React.FC<IHeader> = ({ spent, restSum }: IHeader) => {
  return (
    <header className="header">
      <span className="header__date">Date: {new Date().toDateString()}</span>
      <div className="header__cash-content sum">
        <span className="sum__spend">Spend: {spent}</span>
        <span className="sum__balance">Balance: {restSum}</span>
      </div>
    </header>
  );
};
