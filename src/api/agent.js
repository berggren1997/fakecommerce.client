import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;
// axios.defaults.baseURL = apiUrl;
axios.defaults.baseURL = "https://localhost:5001/api";
axios.defaults.withCredentials = true;
const apiKey = process.env.REACT_APP_APIKEY;
axios.defaults.headers["api-key"] = apiKey;
const token = JSON.parse(localStorage.getItem("user"));

if (token) {
  axios.defaults.headers["authorization"] = `Bearer ${token.accessToken}`;
}

const responseBody = (response) => response.data;

// axios.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   async (err) => {
//     const originalConfig = err.config;

//     if (err.response) {
//       // Access Token was expired
//       if (err.response.status === 401 && !originalConfig._retry) {
//         originalConfig._retry = true;
//         try {
//           const rs = await requests.get("/auth/refresh", {
//             withCredentials: true,
//           });

//           const { accessToken, username } = rs.data;
//           axios.headers.Authorization = `Bearer ${accessToken}`;
//           localStorage.setItem(
//             "user",
//             JSON.stringify({ accessToken, username })
//           );

//           return axios(originalConfig);
//         } catch (_error) {
//           return Promise.reject(_error);
//         }
//       }
//     }
//     return Promise.reject(err);
//   }
// );

const requests = {
  get: (url, options = undefined) => axios.get(url, options).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  delete: (url, options = undefined) =>
    axios.delete(url, options).then(responseBody),
};

const Products = {
  getProducts: () => requests.get("/product"),
  getProductById: (id, options) => requests.get(`/product/${id}`, options),
};

const Account = {
  login: (values) => requests.post("/auth/login", values),
  register: (values) => requests.post("/auth/register", values),
  getCurrentUser: () => requests.get("/auth/currentuser"),
  refreshAccessToken: () => requests.get("/auth/refresh"),
  signOut: () => {
    localStorage.removeItem("user");
    axios.defaults.headers.Authorization = undefined;
  },
};

const Basket = {
  getBasket: () => requests.get("/shoppingcart"),
  addItemToBasket: (productId, quantity = 1) =>
    requests.post(`/shoppingcart?productId=${productId}&quantity=${quantity}`),
  removeItemFromBasket: (productId, quantity = 1) =>
    requests.delete(`shoppingcart?productId=${productId}&quantity=${quantity}`),
  clearCart: () => requests.delete("/shoppingcart/clearCart"),
  clearCartItem: (itemId) =>
    requests.delete(`/shoppingcart/clearCartItem/${itemId}`),
};

const Checkout = {
  createCheckoutSession: (values) =>
    requests.post("/payment/create-checkout-session", values),
};

const agent = {
  Account,
  Products,
  Basket,
  Checkout,
};

export default agent;
