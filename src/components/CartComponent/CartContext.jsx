// CartContext.js
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [productsOnCart, setProductsOnCart] = useState([]); // Nuevo estado para los productos en el carrito

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
        setProductsOnCart((prevProducts) => [...prevProducts, product]); // Agregar al nuevo estado
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, productsOnCart }}>
            {children}
        </CartContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
    return useContext(CartContext);
};
