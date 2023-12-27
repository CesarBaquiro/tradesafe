import { Button, Link } from "@chakra-ui/react";
import { IconShoppingCartFilled } from "@tabler/icons-react";

const CartWidget = () => {
    return (
        <Link href="/cart">
            <Button colorScheme="whiteAlpha" variant="ghost">
                <IconShoppingCartFilled></IconShoppingCartFilled>
            </Button>
        </Link>
    );
};

export default CartWidget;
