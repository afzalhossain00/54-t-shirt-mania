import React, { useContext } from 'react';
import { MoneyContex } from '../Grandpa/Grandpa';

const Uncle = ({ house }) => {
    const [money, setMoney] = useContext(MoneyContex)
    return (
        <div>
            <h3>Uncle</h3>
            <p><small>House: {house}</small></p>
            <p><small>Money: {money}</small></p>
        </div>
    );
};

export default Uncle;