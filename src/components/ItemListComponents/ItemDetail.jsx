import {
    Card,
    Image,
    Stack,
    CardBody,
    Heading,
    Text,
    CardFooter,
    UnorderedList,
    ListItem,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Product from "../CartComponent/Product";
import productsData from "./productsData.json";

const ItemDetail = () => {
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
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                />

                <Stack>
                    <CardBody>
                        <Heading size="md">{selectedProduct.name}</Heading>
                        <Text py="2">${selectedProduct.price}</Text>
                        <UnorderedList>
                            {selectedProduct.specifications.map(
                                (spec, index) => (
                                    <ListItem key={index}>{spec}</ListItem>
                                )
                            )}
                        </UnorderedList>
                        <Text py="2">{selectedProduct.shortDescription}</Text>
                    </CardBody>

                    <CardFooter>
                        <Product product={selectedProduct} />
                    </CardFooter>
                </Stack>
            </Card>
        </div>
    );
};

export default ItemDetail;
