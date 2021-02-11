import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { useParams } from 'react-router-dom';
import { doCall } from '../../utils/api/calls';
import { Button } from '../../components/Button';

const socket = io.connect('http://localhost:5000');

export const Quickplay = () => {
    const [gameState, setGameState] = useState({});
    const { id } = useParams();

    const room = id;

    useEffect(() => {
        doCall(`http://localhost:5000/play/quickplay/${room}`).then((res) => {
            // setCards(res.data);
            socket.on('connect', function () {
                socket.emit('quickplay', room);
            });

            socket.on('getGameState', function (data) {
                setGameState(data);
            });
        });

        return () => {};
    }, []);
    return (
        <div>
            {console.log(gameState)}

            <div>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
            </div>
        </div>
    );
};
