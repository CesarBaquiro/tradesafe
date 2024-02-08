/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useCart } from "./CartContext";
import { Box, Text, Button, VStack, Divider } from "@chakra-ui/react";

const CartItemCard = ({ product }) => {
    const { cart } = useCart();

    useEffect(() => {
        console.log("Productos en el carrito:", cart);
    }, [cart]);

    const { removeFromCart } = useCart();

    // Validación para asegurarse de que product esté definido
    if (!product) {
        return "No hay productos"; // O mostrar un mensaje indicando que no hay producto
    }

    const handleRemove = () => {
        removeFromCart(product.id); // Ajusta según la lógica real para eliminar un producto del carrito
    };

    console.log("Productos en el carrito:", cart);

    return (
        <Box borderWidth="1px" borderRadius="lg" p="4" mb="4">
            <VStack align="start" spacing="2">
                <Text fontWeight="bold">{useCart.name}</Text>

                {/* <Text>${product.price}</Text> */}
                {/* <Text>Quantity: {product.quantity}</Text> */}
                {/* Agrega más detalles según las propiedades de tus productos */}
                <Button colorScheme="red" onClick={handleRemove}>
                    Remove
                </Button>
            </VStack>
            <Divider mt="4" />
        </Box>
    );
};

export default CartItemCard;
