import React from 'react';
import { Navigation } from './Navigation';

export const GlobalPage = (props) => {
    return (
        <div className='bg-background-primary text-text-primary top-0 left-0 right-0 bottom-0 absolute'>
            <Navigation />
            <div className='mt-10 container mx-auto'>{props.children}</div>
        </div>
    );
};
