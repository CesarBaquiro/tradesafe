import { Grid } from "@chakra-ui/react";
import ProductCard from "../ProductComponents/ProductCard";
import productsData from "../ProductComponents/productsData.json";

const CarsComponent = () => {
    return (
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            {/*----- Mapeamos los productos de la categoria seccion cars ------*/}
            {productsData.cars.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </Grid>
    );
};

export default CarsComponent;
