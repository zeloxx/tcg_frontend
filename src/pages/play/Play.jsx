import React, { useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { doCall } from '../../utils/api/calls';

export const Play = () => {
    const history = useHistory();
    const [findingMatch, setFindingMatch] = useState(false);

    const findMatch = () => {
        setFindingMatch(true);
        doCall('http://localhost:5000/play/quickplay').then((res) => {
            console.log(res);
            history.push(`/quickplay/${res.data.data.redirectId}`);
        });
    };

    return (
        <div>
            <div className='flex'>
                {/* <div className='mb-3'>Choose deck</div> */}
                <div>
                    <div>
                        <Button onClick={findMatch}>Quick Play</Button>
                    </div>
                    <div>{findingMatch && <div>Finding match...</div>}</div>
                </div>
            </div>
        </div>
    );
};
