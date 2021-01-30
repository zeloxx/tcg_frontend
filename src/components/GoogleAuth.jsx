import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { login } from '../api/googleAuth';
import { Button } from './Button';

export const GoogleAuth = (props) => {
    const responseGoogle = async (authResult) => {
        try {
            const token = authResult.tokenId;
            if (token) {
                login(token);
            } else {
                throw new Error(authResult);
            }
        } catch (e) {
            console.log(e);
        }
    };

    const { signIn, loaded } = useGoogleLogin({
        clientId: '395956662139-7mfdnfk2n5nonl8pcast4q7dniueb16b.apps.googleusercontent.com',
        onSuccess: responseGoogle,
        onFailure: responseGoogle,
        cookiePolicy: 'single_host_origin',
    });

    return <Button clickHandler={signIn}>Sign in with Google</Button>;
};
