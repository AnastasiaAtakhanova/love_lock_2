import axios from "axios";

export const getUserData = (username) => {
    return axios
        .get('http://localhost:5000/api/get_lock_data', {
            params: {username: username}
        })
        .then(res => { 
                let length = res.data.data.length;
                let userData = new Array(length);
                for (let i = 0; i < length; i++) {
                    userData[i] = new Array(4);
                    userData[i][0] = res.data.data[i]["size"];
                    userData[i][1] = res.data.data[i]["design"];
                    userData[i][2] = res.data.data[i]["person"];
                    userData[i][3] = res.data.data[i]["message"];
                }
                return userData;
            }
        ).catch((error) => {
            console.log(error);
        });
};
