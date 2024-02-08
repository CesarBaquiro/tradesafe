import { Grid } from "@chakra-ui/react";
import ItemList from "../ItemListComponents/ItemList";
import productsData from "../ItemListComponents/productsData.json";

const CarsComponent = () => {
    return (
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            {/*----- Mapeamos los productos de la categoria seccion cars ------*/}
            {productsData.cars.map((product) => (
                <ItemList key={product.id} product={product} />
            ))}
        </Grid>
    );
};

export default CarsComponent;
