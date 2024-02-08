import { Box, Image } from "@chakra-ui/react";

const ItemListContainer = () => {
    return (
        <Box w="100%">
            <Image
                objectFit="cover"
                w="100%"
                maxH="600px"
                src="https://images.unsplash.com/photo-1686771416282-3888ddaf249b?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Negocios y trabajo"
            />
            <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                textAlign="center"
                color="white"
            >
                <h1
                    style={{
                        color: "White",
                        fontSize: "3em",
                        fontWeight: "bold",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                    }}
                >
                    Bienvenido a TradeSafe
                </h1>
            </Box>
        </Box>
    );
};

export default ItemListContainer;
