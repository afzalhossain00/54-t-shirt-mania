import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const RingContext = createContext('Gold er ring')
export const MoneyContex = createContext(1000)

const Grandpa = () => {
    // const house = 7;
    const [house, setHouse] = useState(1);
    const [money, setMoney] = useState(1000);
    // const ring = 'diamond ring'
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <MoneyContex.Provider value={[money, setMoney]}>
                <div className='grandpa'>
                    <h2>Grandpa</h2>
                    <section className='flex'>
                        <Father house={house}></Father>
                        <Uncle house={house}></Uncle>
                        <Aunty house={house}></Aunty>
                    </section>
                </div>
            </MoneyContex.Provider>
        </RingContext.Provider>
    );
};

export default Grandpa;