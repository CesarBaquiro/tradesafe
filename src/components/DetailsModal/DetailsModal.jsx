import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Card,
    Image,
    Stack,
    CardBody,
    Heading,
    Text,
    CardFooter,
} from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const DetailsModal = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent maxW="1000px">
                <ModalHeader>Product Details</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Card
                        direction={{ base: "column", sm: "row" }}
                        overflow="hidden"
                        variant="outline"
                    >
                        <Image
                            objectFit="cover"
                            maxW={{ base: "100%", sm: "400px" }}
                            src="https://images.unsplash.com/photo-1616868324976-b1c41bf891da?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Caffe Latte"
                        />

                        <Stack>
                            <CardBody>
                                <Heading size="md">Subaru WRX STI 2014</Heading>

                                <Text py="2">$120.000.000</Text>

                                <Text py="2">
                                    This is the perfect car, you can use this
                                    car for daily also for track days
                                </Text>
                                <Text>
                                    <ul>
                                        <li>
                                            Motor: 2.5L Turbocharged Boxer 4
                                        </li>
                                        <li>
                                            Potencia: 305 hp Torque: 290 lb-ft
                                        </li>
                                        <li>
                                            Transmisión: Manual de 6 velocidades
                                        </li>
                                        <li>
                                            Tracción: Symmetrical All-Wheel
                                            Drive
                                        </li>
                                        <li>
                                            (AWD) Suspensión: Deportiva ajustada
                                            para alto rendimiento
                                        </li>
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
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                    </Button>
                    {/* Puedes agregar más botones o acciones aquí si es necesario */}
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default DetailsModal;
