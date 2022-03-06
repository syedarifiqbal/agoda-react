import { createContext, useState, useContext } from 'react';
import axios from '../axios';
import AppContext from './AppContext';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(products.length);
    const [selectedProduct, setSelectedProducts] = useState(null);
    const { setIsLoading } = useContext(AppContext);

    const fetchProducts = async (page = 1, limit = 12) => {
        try {
            setIsLoading(true);
            const { data } = await axios.get('/products', { params: { page, limit } })
            setProducts(data.items);
            setTotalProducts(data.count);
        } catch (error) {
            console.log('something went wrong with api. this is temprory message')
        }
        setIsLoading(false);
    }

    const fetchProductById = async (ID) => {
        try {
            setIsLoading(true);
            const { data } = await axios.get(`/products/${ID}`)
            setSelectedProducts(data);
        } catch (error) {
            console.log('something went wrong with api. this is temprory message')
        }
        setIsLoading(false);
    }

    return <ProductContext.Provider value={{
        products,
        fetchProducts,
        totalProducts,
        selectedProduct,
        fetchProductById
    }}>
        {children}
    </ProductContext.Provider>
}

export default ProductContext;
