import axios from 'axios';

export const doCall = (url, opts) => {
    return axios({
        url: url,
        ...opts,
        withCredentials: true,
    })
        .then((res) => res)
        .catch((err) => console.log(err));
};
