import axios from "axios";

const API_URL = "http://localhost:5000/api/";

const register = async (email, password) => {
    try {
        let req = {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        }
        await fetch(API_URL + 'signup', req)
    } catch (err) {
        console.log(err)
    }
};


const login = async (email, password) => {
    try {
        let req = {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        }
        return await fetch(API_URL + 'login', req)
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    } catch (err) {
        console.log(err)
    }
}

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

