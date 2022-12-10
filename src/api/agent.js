import axios from "axios";

axios.defaults.baseURL = "https://localhost:5001/api";
axios.defaults.withCredentials = true;
const apiKey = process.env.APIKEY;
axios.defaults.headers["api-key"] =
  "super-secret-api-key-that-probably-should-be-a-guid"; //should be an environment variable
console.log(apiKey);
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
//           const rs = await axios.get("/auth/refresh", {
//             withCredentials: true,
//           });

//           const { accessToken, username } = rs.data;
//           axios.headers.Authorization = `Bearer ${accessToken}`;

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
  delete: (url) => axios.delete(url).then(responseBody),
};

const Products = {
  getProducts: () => requests.get("/product"),
  getProductById: (id, options) => requests.get(`/product/${id}`, options),
};

const Account = {
  login: (values) => requests.post("/auth/login", values),
  register: (values) => requests.post("/auth/register", values),
  getCurrentUser: () => requests.post("/auth/currentuser"),
};

const Basket = {
  getBasket: () => requests.get("/shoppingcart"),
  addItemToBasket: (productId, quantity = 1) =>
    requests.post(`/shoppingcart?productId=${productId}&quantity=${quantity}`),
  removeItemFromBasket: (productId, quantity = 1) =>
    requests.delete(`shoppingcart?productId=${productId}&quantity=${quantity}`),
  clearCart: () => requests.delete("/shoppingcart/clearCart"),
};

const agent = {
  Account,
  Products,
  Basket,
};

export default agent;
