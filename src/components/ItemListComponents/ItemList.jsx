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
    Grid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useCart } from "../CartComponent/CartContext";

const ItemList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "cars");

        getDocs(itemsCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => doc.data());
            setProducts(docs);
        });
    }, []);

    const { dispatch } = useCart();

    const onAddProduct = () => {
        dispatch({ type: "ADD_TO_CART", payload: products });
    };

    return (
        <>
            <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                {products.map((p, index) => (
                    <Card key={index} maxW="sm">
                        <CardBody>
                            <Image
                                src={p.image}
                                alt={p.name}
                                borderRadius="lg"
                            />
                            <Stack mt="6" spacing="3">
                                <Heading size="md">{p.name}</Heading>
                                <Text>{p.shortDescription}</Text>
                                <Text color="blue.600" fontSize="2xl">
                                    ${p.price}
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
                                <Link to={`/vehicles/cars/${p.id}`}>
                                    <Button variant="solid" colorScheme="blue">
                                        Ver detalles
                                    </Button>
                                </Link>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                ))}
            </Grid>
        </>
    );
};

export default ItemList;
