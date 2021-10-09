import React, { useState } from 'react';
import { Button, BtnSize, BtnShape } from '../button/Button';
import "./Details.scss";

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const Details: React.FC = () => {
    const [isOpened, setIsOpened] = useState(false);
    const toggle = () => {
        setIsOpened(!isOpened);
    };

    const items = nums.map(num => <li key={num} className="details__list-item">{num}</li>);

    return <div className="details-wrapper">
        <div className="details">
            {isOpened && <>
                <ul className="details__list">
                    {items}
                </ul>
                <div className="details__separator"></div>
            </>}
            <Button
                className="details__toggler"
                size={BtnSize.small}
                shape={BtnShape.halfsquare}
                onClick={toggle}>Show Details</Button>
        </div>
    </div>
}