/* eslint-disable react/prop-types */
//import { useState } from "react";

import productsData from "./productsData.json";
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

const ProductCard = ({ product }) => {
    return (
        <Card key={product.id} maxW="sm">
            <CardBody>
                <Image
                    src={product.image}
                    alt={productsData.name}
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
                    <Button variant="solid" colorScheme="blue">
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

export default ProductCard;
