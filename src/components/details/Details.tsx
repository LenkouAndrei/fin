import React, { useState } from 'react';
import { Button, BtnSize, BtnShape } from '../button/Button';
import { ISpending } from '../../services/spendings.service';
import './Details.scss';

const emptyList = (
  <li className="details__list-item--empty">Storage is empty</li>
);

interface IDetails {
  spendings: ISpending[];
}

export const Details: React.FC<IDetails> = ({ spendings }: IDetails) => {
  const [isOpened, setIsOpened] = useState(false);
  const toggle = () => {
    setIsOpened(!isOpened);
  };

  const items = spendings.map(({ spendingName, amount, id }: ISpending) => (
    <li key={id} className="details__list-item">
      <span>{spendingName}</span> - <span>{amount}</span>
    </li>
  ));

  return (
    <div className="details-wrapper">
      <div className="details">
        {isOpened && (
          <>
            <ul className="details__list">
              {items.length > 0 ? items : emptyList}
            </ul>
            <div className="details__separator"></div>
          </>
        )}
        <Button
          className="details__toggler"
          size={BtnSize.small}
          shape={BtnShape.halfsquare}
          onClick={toggle}
        >
          Show Details
        </Button>
      </div>
    </div>
  );
};
