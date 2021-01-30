import React, { useEffect, useState } from 'react';
import { TradingCard } from '../../components/TradingCard';
import { doCall } from '../../utils/api/calls';

export const CardLibrary = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        doCall('http://localhost:5000/cards').then((res) => {
            setCards(res.data);
        });
        return () => {};
    }, []);

    return (
        <div>
            <div className='flex flex-wrap justify-center'>
                {cards.map((card) => {
                    return (
                        <div key={card._id} className='m-3'>
                            <TradingCard card={card} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
