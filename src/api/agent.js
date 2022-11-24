import axios from "axios";

axios.defaults.baseURL = "https://localhost:5001/api";

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

const agent = {
  Account,
  Products,
};

export default agent;
