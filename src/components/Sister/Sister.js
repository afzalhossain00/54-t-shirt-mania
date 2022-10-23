import React from 'react';
import { useContext } from 'react';
import { MoneyContex } from '../Grandpa/Grandpa';

const Sister = ({ house }) => {
    const [money, setMoney] = useContext(MoneyContex)
    return (
        <div>
            <h4>Sister</h4>
            <p><small>House: {house}</small></p>
            <p><small>Money: {money}</small></p>
            <button onClick={() => setMoney(money + 500)}>Add 500</button>
        </div>
    );
};

export default Sister;