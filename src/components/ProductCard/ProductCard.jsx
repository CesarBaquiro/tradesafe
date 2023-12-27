import { useState } from "react";
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

import DetailsModal from "../DetailsModal/DetailsModal";

const ProductCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        // Subaru card--------------------------------------
        <Card maxW="sm">
            <CardBody>
                <Image
                    src="https://images.unsplash.com/photo-1616868324976-b1c41bf891da?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                    <Heading size="md">Subaru WRX STI 2014</Heading>
                    <Text>
                        This is the perfect car, you can use this car for daily
                        also for track days
                    </Text>
                    <Text color="blue.600" fontSize="2xl">
                        $120.000.000
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue">
                        Add to cart
                    </Button>
                    <Button
                        variant="ghost"
                        colorScheme="blue"
                        onClick={handleModalOpen}
                    >
                        See details
                    </Button>
                </ButtonGroup>
            </CardFooter>
            {isModalOpen && (
                <DetailsModal isOpen={isModalOpen} onClose={handleModalClose} />
            )}
        </Card>
    );
};

export default ProductCard;
