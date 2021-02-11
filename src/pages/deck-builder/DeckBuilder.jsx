import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Mana } from '../../components/Mana';
import { TradingCard } from '../../components/TradingCard';
import { doCall } from '../../utils/api/calls';

export const DeckBuilder = (props) => {
    const { id } = useParams();
    const [cards, setCards] = useState([]);
    const [deckList, setDeckList] = useState([]);
    const [deckListCounter, setDeckListCounter] = useState({});
    // const [manaSpread, setManaSpread] = useState({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0 });

    const cardsInDeck = Object.values(deckListCounter).reduce(
        (a, b) => a + b,
        0
    );
    // const totalMana = Object.values(manaSpread).reduce((a, b) => a + b, 0);

    useEffect(() => {
        debugger;

        doCall('http://localhost:5000/cards').then((res) => {
            setCards(res.data);
        });
        if (id) {
            doCall(`http://localhost:5000/decks/${id}`).then((res) => {
                setCards(res.data);
            });
        } else {
            // const opts = {
            //     params: e
            //         id: param,
            //     },
            // };
        }
        return () => {};
    }, []);

    const handleAddToDeck = (card) => {
        if (cardsInDeck < 30) {
            if (deckListCounter[card._id]) {
                if (deckListCounter[card._id] < 2) {
                    const count = deckListCounter[card._id] + 1;
                    setDeckListCounter({
                        ...deckListCounter,
                        [card._id]: count,
                    });

                    // const manaCounter = manaSpread[card.mana] + 1;
                    // setManaSpread({ ...manaSpread, [card.mana]: manaCounter });
                }
            } else {
                setDeckListCounter({ ...deckListCounter, [card._id]: 1 });
                setDeckList([...deckList, card]);

                // if (manaSpread[card.mana]) {
                //     const manaCounter = manaSpread[card.mana] + 1;
                //     setManaSpread({ ...manaSpread, [card.mana]: manaCounter });
                // } else {
                //     setManaSpread({ ...manaSpread, [card.mana]: 1 });
                // }
            }
        }
    };

    const removeFromDeck = (card) => {
        if (deckListCounter[card._id]) {
            if (
                deckListCounter[card._id] > 0 &&
                deckListCounter[card._id] <= 2
            ) {
                const count = deckListCounter[card._id] - 1;
                setDeckListCounter({ ...deckListCounter, [card._id]: count });
            }

            if (deckListCounter[card._id] === 1) {
                const newArr = [];
                deckList.forEach((element) => {
                    if (element._id !== card._id) {
                        newArr.push(element);
                    }
                });
                setDeckList(newArr);
            }
            // if (manaSpread[card.mana]) {
            //     if (manaSpread[card.mana] > 0) {
            //         const manaCounter = manaSpread[card.mana] - 1;
            //         setManaSpread({ ...manaSpread, [card.mana]: manaCounter });
            //     }
            // }
        }
    };

    const handleSaveDeck = () => {
        doCall('http://localhost:5000/decks', {
            data: {
                name: 'test',
                cards: ['60040163fa69ed68329eedbf', '6004b67016b41e01eaa8138e'],
            },
            method: 'POST',
        }).then((res) => {});
    };

    return (
        <div>
            <div className='flex'>
                <div
                    className='ml-3 mr-5 p-3 bg-medium-blue rounded flex flex-col justify-between'
                    style={{
                        minWidth: '300px',
                        maxHeight: 'calc(100vh - 135px)',
                    }}
                >
                    <div>
                        <div className='p-2 bg-dark-blue rounded'>
                            <div className=''>{cardsInDeck} / 30</div>
                            {/* <div className='flex justify-center relative' style={{ height: '150px' }}>
                                <div className=' flex bg-mana rounded absolute' style={{ height: `${(manaSpread[10] / totalMana) * 100 || 5}%`, width: '5px', bottom: 0 }}></div>
                                <div className=' flex bg-mana rounded absolute ml-1' style={{ height: `${(manaSpread[9] / totalMana) * 100 || 5}%`, width: '5px', bottom: 0, right: 10 }}></div>
                                <div className=' flex bg-mana rounded absolute ml-1' style={{ height: `${(manaSpread[8] / totalMana) * 100 || 5}%`, width: '5px', bottom: 0, right: 20 }}></div>
                                <div className=' flex bg-mana rounded absolute ml-1' style={{ height: `${(manaSpread[7] / totalMana) * 100 || 5}%`, width: '5px', bottom: 0, right: 30 }}></div>
                                <div className=' flex bg-mana rounded absolute ml-1' style={{ height: `${(manaSpread[6] / totalMana) * 100 || 5}%`, width: '5px', bottom: 0, right: 40 }}></div>
                                <div className=' flex bg-mana rounded absolute ml-1' style={{ height: `${(manaSpread[5] / totalMana) * 100 || 5}%`, width: '5px', bottom: 0, right: 50 }}></div>
                                <div className=' flex bg-mana rounded absolute ml-1' style={{ height: `${(manaSpread[4] / totalMana) * 100 || 5}%`, width: '5px', bottom: 0, right: 60 }}></div>
                                <div className=' flex bg-mana rounded absolute ml-1' style={{ height: `${(manaSpread[3] / totalMana) * 100 || 5}%`, width: '5px', bottom: 0, right: 70 }}></div>
                                <div className=' flex bg-mana rounded absolute ml-1' style={{ height: `${(manaSpread[2] / totalMana) * 100 || 5}%`, width: '5px', bottom: 0, right: 80 }}></div>
                                <div className=' flex bg-mana rounded absolute ml-1' style={{ height: `${(manaSpread[1] / totalMana) * 100 || 5}%`, width: '5px', bottom: 0, right: 90 }}></div>
                            </div> */}
                        </div>
                        <div className='bg-medium-blue '>
                            {deckList.map((card, i) => {
                                return (
                                    <div
                                        key={`${card._id}-${i}`}
                                        className='flex items-center'
                                    >
                                        <div
                                            onClick={() => removeFromDeck(card)}
                                            className='w-full bg-dark-blue rounded flex items-center mt-2 cursor-pointer no-select'
                                        >
                                            <img
                                                className='object-cover rounded-l'
                                                style={{
                                                    width: '30px',
                                                    height: '30px',
                                                }}
                                                src={
                                                    '/' +
                                                    card.imagePath.split(
                                                        '.'
                                                    )[0] +
                                                    '-tooltip' +
                                                    '.' +
                                                    card.imagePath.split('.')[1]
                                                }
                                            />
                                            <div className='w-full flex justify-between px-2'>
                                                <div className='flex items-center'>
                                                    <div className=''>
                                                        {
                                                            deckListCounter[
                                                                card._id
                                                            ]
                                                        }
                                                        x
                                                    </div>
                                                    <div className='ml-2 text-white'>
                                                        {card.name}
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className='flex items-center px-2 '
                                                style={{ height: '30px' }}
                                            >
                                                <div>{card.mana}</div>
                                                <div className='ml-1'>
                                                    <Mana />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <Button onClick={handleSaveDeck}>Save Deck</Button>
                </div>
                <div
                    className='flex flex-wrap overflow-y-scroll mr-3'
                    style={{
                        minWidth: '250px',
                        maxHeight: 'calc(100vh - 135px)',
                    }}
                >
                    {cards.map((card) => {
                        return (
                            <div
                                onClick={() => handleAddToDeck(card)}
                                key={card._id}
                                className={`mb-5 mr-5 ${
                                    deckListCounter[card._id] === 2 ||
                                    cardsInDeck === 30
                                        ? 'opacity-30'
                                        : ''
                                }`}
                            >
                                <TradingCard hoverable={true} card={card} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
