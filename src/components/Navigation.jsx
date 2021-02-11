import React from 'react';
import { Link } from 'react-router-dom';
import { doCall } from '../utils/api/calls';
import { Button } from './Button';

export const Navigation = () => {
    return (
        <div className='container mx-auto py-3'>
            <div className='flex justify-between items-center'>
                <div>
                    <ul className='flex'>
                        {/* <li className='p-3'>
                            <Link to={'/card-library'}> Card Library</Link>
                        </li> */}
                        <li className='p-3'>
                            <Link to={'/decks'}> Deck Builder</Link>
                        </li>
                        {/* <li className='ml-2 p-3'>
                            <Link to={'/boosters'}>Buy Booster Packs</Link>
                        </li>
                        <li className='ml-2 p-3'>
                            <Link to={'/auction'}>Player Auction House</Link>
                        </li> */}
                        <li className='ml-2 p-3'>
                            <Link to={'/play'}>Play</Link>
                        </li>
                    </ul>
                </div>
                <div className='mr-3 flex'>
                    <div
                        className='text-gold'
                        onClick={() =>
                            (window.location.href =
                                'http://localhost:5000/auth/google')
                        }
                    >
                        Sign In With Google
                    </div>
                    <div
                        onClick={() =>
                            (window.location.href =
                                'http://localhost:5000/auth/logout')
                        }
                        className='ml-3'
                    >
                        Sign Out
                    </div>
                </div>
            </div>
        </div>
    );
};
