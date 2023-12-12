import {
    Flex,
    Box,
    Heading,
    Spacer,
    Link,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    Button,
} from "@chakra-ui/react";
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            padding="1rem"
            bg="gray.900"
            color="white"
        >
            <Box>
                <Heading as="h1" size="md">
                    TradeSafe
                </Heading>
            </Box>
            <Spacer />
            <Box>
                <Link href="#" marginRight="1rem">
                    Inicio
                </Link>
                <Link href="#" marginRight="1rem">
                    Informacion
                </Link>
                {/* Dropdown */}

                <Menu>
                    <MenuButton as={Button} colorScheme="white" variant="ghost">
                        Vehiculos
                    </MenuButton>
                    <MenuList>
                        <MenuItem color="gray.900">Carros</MenuItem>
                        <MenuItem color="gray.900">Camionetas</MenuItem>
                        <MenuItem color="gray.900">Motos</MenuItem>
                    </MenuList>
                </Menu>
                <CartWidget />
            </Box>
        </Flex>
    );
};

export default Navbar;
