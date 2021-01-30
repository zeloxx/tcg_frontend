// const login = async (code) => {
//     return fetch('http://localhost:5000/api/auth/google', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ code }),
//     }).then((res) => {
//         if (res.ok) {
//             return res.json();
//         } else {
//             return Promise.reject(res);
//         }
//     });
// };

import { doCall } from '../utils/api/calls';

const login = async (token) => {
    return doCall('http://localhost:5000/api/auth/google', { method: 'POST', data: { token }, withCredentials: true });
};

export { login };
