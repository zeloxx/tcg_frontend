import { useState } from 'react';
import { GoogleAuth } from '../../components/GoogleAuth';
import { doCall } from '../../utils/api/calls';

export const Signup = () => {
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
                    doCall('http://localhost:5000/api/v1/users', { method: 'POST', data: { email, password } }).then((res) => console.log(res));
                }}
            >
                Sign Up
            </button>
            <div>
                <GoogleAuth />
            </div>
        </div>
    );
};
