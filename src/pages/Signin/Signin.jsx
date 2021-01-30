import { useState } from 'react';
import { doCall } from '../../utils/api/calls';

export const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <label>Email</label>
            <input onChange={(e) => setEmail(e.target.value)} value={email} type='text/html' />

            <label>Password</label>
            <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' />

            <button
                onClick={() => {
                    doCall('http://localhost:5000/api/v1/login', { method: 'POST', data: { email, password }, withCredentials: true }).then((res) => console.log(res));
                }}
            >
                Sign In
            </button>

            <div>
                <button
                    onClick={() => {
                        doCall('http://localhost:5000/api/v1/users', { method: 'GET', withCredentials: true }).then((res) => console.log(res));
                    }}
                >
                    check signin
                </button>
            </div>
            <div>
                <button
                    onClick={() => {
                        doCall('http://localhost:5000/api/v1/logout', { method: 'GET', withCredentials: true }).then((res) => console.log(res));
                    }}
                >
                    logout
                </button>
            </div>
        </div>
    );
};
