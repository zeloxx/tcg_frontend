import React from 'react';

export const GlobalPage = (props) => {
    return (
        <div className='bg-background-primary text-text-primary top-0 left-0 right-0 bottom-0 absolute'>
            {props.children}
        </div>
    );
};
