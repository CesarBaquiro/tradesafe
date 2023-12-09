import { Button } from "@chakra-ui/react";
import { IconShoppingCartFilled } from "@tabler/icons-react";

const CartWidget = () => {
    return (
        <Button colorScheme="whiteAlpha" variant="ghost">
            <IconShoppingCartFilled></IconShoppingCartFilled>
        </Button>
    );
};

export default CartWidget;
