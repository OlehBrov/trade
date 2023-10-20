import axios from "axios";

axios.defaults.baseURL = "https://api2.comtrading.ua";

const setToken = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const dellToken = () => {
  delete axios.defaults.headers.common["Authorization"];
};

export const signup = async (credentils) => {
  try {
    const { data } = await axios.post("/register", credentils);
    setToken(data.token);

    return data;
  } catch (error) {
    alert(error.response.data.message);
    return Promise.reject(error.message);
  }
};

export const login = async (credentils) => {
    console.log('credentilas', credentils)
  try {
    const { data } = await axios.post("/login", credentils);
    setToken(data.token);

    return data;
  } catch (error) {
    alert(error.response.data.message);
    return Promise.reject(error.message);
  }
};

export const logout = async () => {
  try {
    await axios.post("/logout");
    dellToken();
  } catch (error) {
    alert(error.response.data.message);
    return Promise.reject(error.message);
  }
};

export const currentUser = async (token) => {
  setToken(token);
  try {
    const { data } = await axios.get("/api/users");

    return data;
  } catch (error) {
    dellToken();
    alert(error.response.data.message);
    return Promise.reject(error.response.statusText);
  }
};

// export 

// export const updateUserName = async (token, name) => {
//    try {
//      const response = await axios.patch("/api/users/avatars", { name },
//      dellToken(token)
//      );

//      return response.data;
//    } catch (error) {
//       return Promise.reject(error.response.data.message);
//    }
//  };

export const subscribeUser = async (email) => {
  try {
    const { data } = await axios.post("/api/subscribe", email);
    console.log("You was successful sing up to newsletter!");
    return data;
  } catch (error) {
    alert(error.response.data.message);
    return Promise.reject(error.message);
  }
};
