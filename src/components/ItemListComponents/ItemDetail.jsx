/* eslint-disable no-unused-vars */
import React from "react";

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
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import Product from "../CartComponent/Product";

const ItemDetail = () => {
    const { id } = useParams();
    const [selectedProduct, setSelectedProduct] = React.useState(null);

    // Obtener datos del producto desde Firebase
    React.useEffect(() => {
        const fetchProduct = async () => {
            try {
                const db = getFirestore();
                const productDocRef = doc(db, "cars", id);
                const productDocSnap = await getDoc(productDocRef);

                if (productDocSnap.exists()) {
                    setSelectedProduct(productDocSnap.data());
                } else {
                    console.log("No existe ese documento!");
                }
            } catch (error) {
                console.error("Error al recuperar el producto:", error);
            }
        };

        fetchProduct();
    }, [id]);

    // Verificar si el producto se encontró o no
    if (!selectedProduct) {
        return <div>Loading...</div>;
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
