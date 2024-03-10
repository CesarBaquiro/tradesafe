import { CartProvider } from "./CartContext";
import ShoppingCart from "./ShoppingCart";
import { useCart } from "../CartComponent/CartContext";
import { VStack, Text, Button, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const Checkout = () => {
    const { cartState } = useCart();
    const cartIsEmpty = cartState.items.length === 0;
    const navigate = useNavigate();

    const handleVerMasProductos = () => {
        // Redirige a la ruta "home"
        navigate("/");
    };

    return (
        <CartProvider>
            <VStack align="center" spacing="100">
                <Text fontSize="5xl" fontWeight="bold" textAlign="center">
                    Carrito de Compras
                </Text>
                <Center>
                    {cartIsEmpty ? (
                        <VStack align="center" spacing="100">
                            <Text textAlign="center">
                                Tu carrito está vacío. ¡Explora nuestra tienda y
                                agrega algunos productos!
                            </Text>
                            <Button
                                colorScheme="blue"
                                onClick={handleVerMasProductos}
                            >
                                Ver más productos
                            </Button>
                        </VStack>
                    ) : (
                        <ShoppingCart />
                    )}
                </Center>
            </VStack>
        </CartProvider>
    );
};

export default Checkout;
