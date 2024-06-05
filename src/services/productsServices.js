import axios from "axios";

const getAllProducts = () => {
    return axios.get('https://dummyjson.com/products');
};

export default getAllProducts;
