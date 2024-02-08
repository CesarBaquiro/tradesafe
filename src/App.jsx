import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { ChakraProvider } from "@chakra-ui/react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import InfoComponent from "./components/InfoComponent/InfoComponent";
import Checkout from "./components/CartComponent/Checkout";
import CarsComponent from "./components/CarsComponent/CarsComponent";
import TrucksComponent from "./components/TrucksComponent/TrucksComponent";
import MotorcyclesComponent from "./components/MotorcyclesComponent/MotorcyclesComponent";
import ItemDetail from "./components/ItemListComponents/ItemDetail";
import { CartProvider } from "./components/CartComponent/CartContext";

function App() {
    return (
        <BrowserRouter>
            <ChakraProvider>
                <CartProvider>
                    <NavBar />
                    <Routes>
                        <Route exact path="/" element={<ItemListContainer />} />
                        <Route
                            exact
                            path="/home"
                            element={<ItemListContainer />}
                        />
                        <Route
                            exact
                            path="/information"
                            element={<InfoComponent />}
                        />
                        <Route exact path="/cart" element={<Checkout />} />
                        <Route
                            exact
                            path="/vehicles/cars"
                            element={<CarsComponent />}
                        />
                        <Route
                            exact
                            path="/vehicles/cars/:id"
                            element={<ItemDetail />}
                        />
                        <Route
                            exact
                            path="/vehicles/trucks"
                            element={<TrucksComponent />}
                        />
                        <Route
                            exact
                            path="/vehicles/motorcycles"
                            element={<MotorcyclesComponent />}
                        />
                    </Routes>
                </CartProvider>
            </ChakraProvider>
        </BrowserRouter>
    );
}

export default App;
