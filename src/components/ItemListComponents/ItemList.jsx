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
    const { dispatch } = useCart();

    const onAddProduct = () => {
        dispatch({ type: "ADD_TO_CART", payload: product });
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
                        Agregar
                    </Button>
                    <Link to={`/vehicles/cars/${product.id}`}>
                        <Button variant="solid" colorScheme="blue">
                            Ver detalles
                        </Button>
                    </Link>
                </ButtonGroup>
            </CardFooter>
        </Card>
    );
};

export default ItemList;
