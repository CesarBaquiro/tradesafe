import { Box, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "../ProductCard/ProductCard";

const CarsComponent = () => {
    return (
        <Box>
            <SimpleGrid
                spacing={5}
                templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
            >
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </SimpleGrid>
        </Box>
    );
};

export default CarsComponent;
