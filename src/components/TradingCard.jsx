import React, { useState } from 'react';
import { Gem } from './Gem';
import { Heart } from './Heart';
import { Mana } from './Mana';
import { Sword } from './Sword';

export const TradingCard = ({ card, hoverable }) => {
    const [baseAttack, setMaxAttack] = useState(card.attack);
    const [attack, setAttack] = useState(card.attack);
    const [baseHealth, setBaseHealth] = useState(card.health);
    const [health, setHealth] = useState(card.health);

    const [mana, setMana] = useState(card.mana);

    let cardBGColor = '#aaaaaa';

    return (
        <div className={`no-select p-2 rounded text-white ${hoverable && 'cursor-pointer'}`} style={{ width: '250px', background: cardBGColor }}>
            <div className='flex justify-between bg-background-primary p-2 rounded-t'>
                <div>{card.name}</div>
                <div className='flex items-center'>
                    <div className='flex items-center'>
                        <div style={{ filter: 'drop-shadow(0px 0px 3px #2890f3)' }}>
                            <Mana />
                        </div>
                        <div className='ml-2 text-xl'>{mana}</div>
                    </div>
                </div>
            </div>

            <div>
                <div className='relative'>
                    <div>
                        <img className='object-cover' style={{ width: '100%', height: '150px' }} src={'/' + card.imagePath} />
                    </div>
                    <div>
                        <div className='absolute p-1 -ml-1 bg-dark-blue rounded-full' style={{ top: '100%', left: '50%', transform: 'translate(0px, -50%)' }}>
                            <Gem rank={card.rank} />
                        </div>
                    </div>
                </div>
                <div className='w-100 bg-background-primary flex justify-between rounded-b' style={{ height: '100px' }}>
                    <div className='p-2 pt-3 font-medium text-sm text-center'>{card.description}</div>
                </div>
                <div className='bg-background-primary rounded mt-2'>
                    <div className='p-2 flex justify-between'>
                        <div className='flex items-center'>
                            <div style={{ filter: 'drop-shadow(0px 0px 2px #ff0)' }}>
                                <Sword />
                            </div>
                            <div className='ml-2 text-xl'>{attack}</div>
                        </div>
                        <div>{card.model}</div>
                        <div className='flex items-center'>
                            <div style={{ filter: 'drop-shadow(0px 0px 3px #f00)' }}>
                                <Heart />
                            </div>
                            <div className='ml-2 text-xl'>{health}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
