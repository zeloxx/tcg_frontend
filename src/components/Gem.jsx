import React from 'react';

export const Gem = ({ rank }) => {
    let gemColor;
    let dropShadow;
    switch (rank) {
        case 1:
            gemColor = '#444444';
            dropShadow = `drop-shadow(0px 0px 0px ${gemColor})`;
            break;

        case 2:
            gemColor = '#00ff00';
            dropShadow = `drop-shadow(0px 0px 1px ${gemColor})`;
            break;

        case 3:
            gemColor = '#3e85fd';
            dropShadow = `drop-shadow(0px 0px 2px ${gemColor})`;
            break;

        case 4:
            gemColor = '#8d00ff';
            dropShadow = `drop-shadow(0px 0px 5px ${gemColor})`;
            break;

        case 5:
            gemColor = '#ff0000';
            dropShadow = `drop-shadow(0px 0px 7px ${gemColor})`;
            break;

        case 6:
            gemColor = '#ffffff';
            dropShadow = `drop-shadow(0px 0px 7px ${gemColor})`;
            break;

        default:
            gemColor = '#444444';
            dropShadow = `drop-shadow(0px 0px 0px ${gemColor})`;
            break;
    }

    return (
        <div style={{ filter: dropShadow }}>
            <svg
                height='12px'
                width='12px'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                version='1.1'
                id='Capa_1'
                x='0px'
                y='0px'
                viewBox='0 0 512 512'
                style={{ enableBackground: 'new 0 0 512 512' }}
                xmlSpace='preserve'
            >
                <g>
                    <g>
                        <polygon fill={gemColor} points='41.868,114.888 118.062,158.877 240.858,87.981 240.858,0   ' />
                    </g>
                </g>
                <g>
                    <g>
                        <polygon fill={gemColor} points='26.727,141.113 26.727,370.887 102.92,326.897 102.92,185.103   ' />
                    </g>
                </g>
                <g>
                    <g>
                        <polygon fill={gemColor} points='271.141,0 271.141,87.981 393.938,158.877 470.131,114.888   ' />
                    </g>
                </g>
                <g>
                    <g>
                        <polygon fill={gemColor} points='256,114.207 133.203,185.103 133.203,326.897 256,397.793 378.796,326.897 378.796,185.103   ' />
                    </g>
                </g>
                <g>
                    <g>
                        <polygon fill={gemColor} points='409.079,185.103 409.079,326.897 485.273,370.887 485.273,141.113   ' />
                    </g>
                </g>
                <g>
                    <g>
                        <polygon fill={gemColor} points='118.062,353.122 41.868,397.112 240.858,512 240.858,424.019   ' />
                    </g>
                </g>
                <g>
                    <g>
                        <polygon fill={gemColor} points='393.938,353.122 271.141,424.019 271.141,512 470.131,397.112   ' />
                    </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
            </svg>
        </div>
    );
};
