import axios from "axios";

axios.defaults.baseURL = "https://localhost:5001/api";
axios.defaults.withCredentials = true;

const responseBody = (response) => response.data;
const requests = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  delete: (url) => axios.delete(url).then(responseBody),
};

const Products = {
  getProducts: () => requests.get("/products"),
  getProductById: (id) => requests.get(`/products/${id}`),
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
};

const agent = {
  Account,
  Products,
  Basket,
};

export default agent;
