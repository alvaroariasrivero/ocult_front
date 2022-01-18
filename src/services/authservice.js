import axios from "axios";
const API_URL = "http://localhost:5000/api/";


const register = async (id_company, username, email, password) => {
    try {
        let req = {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                id_company, 
                username, 
                email, 
                password,
              })
        }
        await fetch(API_URL + 'signup', req)
    } catch (err) {
        console.log(err)
    }
};

// const login = async (email, password) => {
//     try {
//         let req = {
//             method: "POST",
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify({
//                 email, 
//                 password,
//               })
//         }
//         return await fetch(API_URL + 'login', req)
//             .then((response) => {
//                 // if (response.data.accesToken) {
//                 //     console.log(response.data.accesToken)
//                 //     localStorage.setItem("user", JSON.stringify(response.data));
//                 // }
//                 // return response.data;
//                 console.log(response.data.accesToken)

//             });
//     } catch (err) {
//         console.log(err)
//     }
// }

const login = async (mail, password) => {
    console.log("**********")
    const response = await axios
    .post(API_URL + "login", {
        mail,
        password,
    });
    console.log(response)
    if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  };


const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};


const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
  };
  
  export default AuthService