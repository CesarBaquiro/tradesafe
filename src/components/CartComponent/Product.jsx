/* eslint-disable react/prop-types */
// En Product.js
import { useCart } from "./CartContext";
import { Button } from "@chakra-ui/react";

const Product = ({ product }) => {
    const { dispatch } = useCart();

    const addToCart = () => {
        dispatch({ type: "ADD_TO_CART", payload: product });
    };

    return (
        <Button variant="solid" colorScheme="blue" onClick={addToCart}>
            Agregar al carrito
        </Button>
    );
};

export default Product;
