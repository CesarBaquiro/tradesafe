/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import {
    Heading,
    Image,
    Text,
    Divider,
    Card,
    Stack,
    CardBody,
    CardFooter,
    ButtonGroup,
    Button,
} from "@chakra-ui/react";
import { useCart } from "../CartComponent/CartContext"; // Ruta correcta al archivo CartContext

const ItemList = ({ product }) => {
    const { addToCart } = useCart();

    const onAddProduct = () => {
        addToCart(product);
        console.log("Producto agregado al carrito:", product);
    };

    return (
        <Card key={product.id} maxW="sm">
            <CardBody>
                <Image
                    src={product.image}
                    alt={product.name}
                    borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                    <Heading size="md">{product.name}</Heading>
                    <Text>{product.shortDescription}</Text>
                    <Text color="blue.600" fontSize="2xl">
                        ${product.price}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing="2">
                    <Button
                        variant="solid"
                        colorScheme="blue"
                        onClick={onAddProduct}
                    >
                        Add to cart
                    </Button>
                    <Link to={`/vehicles/cars/${product.id}`}>
                        <Button variant="solid" colorScheme="blue">
                            See Details
                        </Button>
                    </Link>
                </ButtonGroup>
            </CardFooter>
        </Card>
    );
};

export default ItemList;
