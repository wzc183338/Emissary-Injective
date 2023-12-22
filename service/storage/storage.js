const getToken = () => {
    return JSON.parse(localStorage.getItem("token"));
};

const getUser = () => {
    return JSON.parse(localStorage.getItem("user"))
        ? JSON.parse(localStorage.getItem("user"))
        : "";
};

const getWalletAddress = () => {
    return localStorage.getItem("address");
};

const storeUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
};

const storeToken = (token) => {
    localStorage.setItem("token", JSON.stringify(token));
};

export { storeUser, storeToken, getToken, getUser, getWalletAddress };
