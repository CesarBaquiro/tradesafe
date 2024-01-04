import {
    Button,
    Card,
    Image,
    Stack,
    CardBody,
    Heading,
    Text,
    CardFooter,
} from "@chakra-ui/react";
import productsData from "./productsData.json";
import { useParams } from "react-router-dom";

const DetailsComponent = () => {
    const { id } = useParams();

    // Encontrar el producto con el ID
    const selectedProduct = productsData.cars.find(
        (product) => product.id === parseInt(id)
    );

    // Verificar si el producto se encontró o no
    if (!selectedProduct) {
        return <div>Product not found</div>;
    }

    // Mostrar los detalles del producto
    return (
        <div>
            <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
            >
                <Image
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "400px" }}
                    src={selectedProduct.image} // Usar la imagen del producto
                    alt={selectedProduct.name} // Usar el nombre del producto como alt
                />

                <Stack>
                    <CardBody>
                        <Heading size="md">{selectedProduct.name}</Heading>
                        <Text py="2">${selectedProduct.price}</Text>
                        <Text py="2">{selectedProduct.shortDescription}</Text>
                        <Text>
                            <ul>
                                {selectedProduct.specifications.map(
                                    (spec, index) => (
                                        <li key={index}>{spec}</li>
                                    )
                                )}
                            </ul>
                        </Text>
                    </CardBody>

                    <CardFooter>
                        <Button variant="solid" colorScheme="blue">
                            Buy
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
        </div>
    );
};

export default DetailsComponent;
