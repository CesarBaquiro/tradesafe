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
            <Link href="/">
                <Box>
                    <Heading as="h1" size="md">
                        TradeSafe
                    </Heading>
                </Box>
            </Link>
            <Spacer />
            <Box>
                <Link href="/home" marginRight="1rem">
                    Inicio
                </Link>
                <Link href="/information" marginRight="1rem">
                    Informacion
                </Link>
                {/* Dropdown */}

                <Menu>
                    <MenuButton as={Button} colorScheme="white" variant="ghost">
                        Vehiculos
                    </MenuButton>
                    <MenuList>
                        <Link href="/vehicles/cars">
                            <MenuItem color="gray.900">Carros</MenuItem>
                        </Link>
                        <Link href="/vehicles/trucks">
                            <MenuItem color="gray.900">Camionetas</MenuItem>
                        </Link>
                        <Link href="/vehicles/motorcycles">
                            <MenuItem color="gray.900">Motos</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
                <CartWidget />
            </Box>
        </Flex>
    );
};

export default Navbar;
