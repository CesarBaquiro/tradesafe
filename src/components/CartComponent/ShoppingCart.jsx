import {
    Box,
    VStack,
    HStack,
    Image,
    Text,
    Button,
    Container,
} from "@chakra-ui/react";
import { useCart } from "./CartContext";

const ShoppingCart = () => {
    const { cartState, dispatch } = useCart();

    const removeFromCart = (product) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: product });
    };

    return (
        <Container maxW="container.md" mt="6">
            <VStack align="start">
                {cartState.items.map((item, index) => (
                    <Box
                        key={index}
                        p="4"
                        borderWidth="1px"
                        borderRadius="md"
                        boxShadow="md"
                        mb="4"
                    >
                        <HStack spacing="4">
                            <Image
                                boxSize="80px"
                                objectFit="cover"
                                src={item.image}
                                alt={item.name}
                                borderRadius="md"
                            />
                            <VStack align="start" flex="1">
                                <Text fontSize="lg" fontWeight="bold">
                                    {item.name}
                                </Text>
                                <Text>${item.price}</Text>
                            </VStack>
                            <Button
                                colorScheme="red"
                                onClick={() => removeFromCart(item)}
                            >
                                Eliminar
                            </Button>
                        </HStack>
                    </Box>
                ))}
            </VStack>
        </Container>
    );
};

export default ShoppingCart;
