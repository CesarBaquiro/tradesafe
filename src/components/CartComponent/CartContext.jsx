/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
// En CartContext.js
import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const updatedCart = { items: [...state.items, action.payload] };
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        case "REMOVE_FROM_CART":
            const filteredCart = {
                items: state.items.filter(
                    (item) => item.id !== action.payload.id
                ),
            };
            localStorage.setItem("cart", JSON.stringify(filteredCart));
            return filteredCart;

        default:
            return state;
    }
};

const CartProvider = ({ children }) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || {
        items: [],
    };
    const [cartState, dispatch] = useReducer(cartReducer, storedCart);

    useEffect(() => {
        // Actualizar el almacenamiento local cuando cambie el estado del carrito
        localStorage.setItem("cart", JSON.stringify(cartState));
    }, [cartState]);

    return (
        <CartContext.Provider value={{ cartState, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart debe ser utilizado dentro de un CartProvider");
    }
    return context;
};

export { CartProvider, useCart };
