import React from 'react';

export const Button = (props) => {
    let classes = '';
    if (props.type === 'secondary') {
        classes = 'text-gold bg-medium-blue';
    } else {
        classes = 'text-background-primary bg-text-cta font-black';
    }
    return (
        <button onClick={props.onClick} className={`p-3 rounded ${classes}`} style={{ border: '0px solid #c4c7ff' }}>
            {props.children}
        </button>
    );
};
