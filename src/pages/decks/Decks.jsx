import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { TradingCard } from '../../components/TradingCard';
import { doCall } from '../../utils/api/calls';

export const Decks = () => {
    const [decks, setDecks] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        doCall('http://localhost:5000/decks').then((res) => {
            setDecks([res.data.data[0], res.data.data[0]]);
            setIsLoaded(true);
        });
        return () => {};
    }, []);

    return (
        // <div>
        //     {isLoaded ? (
        //         <div className='flex justify-center'>
        //             <div className='bg-medium-blue rounded p-5 inline-block'>
        //                 <div className='flex flex-col items-center'>
        //                     {decks.length === 0 ? (
        //                         <div>
        //                             <h1 className='text-3xl'>You do not have any decks created yet.</h1>
        //                         </div>

        //                     ) : (
        //                         <div>
        //                             <div>
        //                                 <h1 className=''>Your Decks</h1>
        //                             </div>

        //                             <div className='mt-5'>
        //                                 <Link to='deck-builder/create'>
        //                                     <Button>Create a New Deck</Button>
        //                                 </Link>
        //                                 <div className='flex flex-wrap justify-center'>
        //                                     {/* {cards.map((card) => {
        //                     return (
        //                         <div key={card._id} className='m-3'>
        //                         <TradingCard card={card} />
        //                         </div>
        //                         );
        //                     })} */}
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     )}

        //     ) : (
        //         <div></div>
        //     )}
        // </div>
        <div>
            {isLoaded ? (
                <div>
                    {decks.length === 0 ? (
                        <div className='flex justify-center'>
                            <div className='bg-medium-blue rounded p-5 inline-block'>
                                <div className='flex flex-col items-center'>
                                    <div>
                                        <h1 className='text-3xl'>You do not have any decks created yet.</h1>
                                    </div>
                                    <div className='mt-5'>
                                        <Link to='deck-builder/create'>
                                            <Button>Create a New Deck</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className='flex'>
                                <div className='ml-3 w-1/4'>
                                    <div className='w-full bg-medium-blue rounded p-5 inline-block'>
                                        <div className='flex flex-col items-center'>
                                            <div className='text-xl text-center'>Create a new deck from scratch</div>
                                            <div className='mt-5'>
                                                <Link to='deck-builder/create'>
                                                    <Button>Create Deck</Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {decks.map((deck) => (
                                    <div className='ml-3 w-1/4'>
                                        <div className='w-full bg-medium-blue rounded p-5 inline-block h-full'>
                                            <div className='flex flex-col items-center justify-between h-full'>
                                                <div className='text-xl' key={deck._id}>
                                                    {deck.name}
                                                </div>
                                                <div className='mt-5 text-gold'>
                                                    <Link to={`deck-builder/${deck._id}`}>
                                                        <Button type={'secondary'}>Edit Deck</Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
};
