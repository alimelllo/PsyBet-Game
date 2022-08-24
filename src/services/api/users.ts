import axios from './axios';

export const getNonce = (currentAccount : string) => {
    return axios.get(`http://localhost:3001/api/v1/users/${currentAccount}/nonce`);
};

export const verifySignature = (currentAccount : string, signature:string) => {
    return axios.post(`http://localhost:3001/api/v1/users/${currentAccount}/signature`,{ signature });
};

export const getUserProfile = () => {
    return axios.get(`http://localhost:3001/api/v1/users/profile`);
};

export const updateWallets = () => {
    return axios.get(`http://localhost:3001/api/v1/finance/updateWallet`);
};
