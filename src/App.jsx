import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import InfoComponent from "./components/InfoComponent/InfoComponent";
import CartComponent from "./components/CartComponent/CartComponent";
import CarsComponent from "./components/CarsComponent/CarsComponent";
import TrucksComponent from "./components/TrucksComponent/TrucksComponent";
import MotorcyclesComponent from "./components/MotorcyclesComponent/MotorcyclesComponent";

import DetailsComponent from "./components/ProductComponents/DetailsComponent";

function App() {
    // 2. Wrap ChakraProvider at the root of your app
    return (
        <BrowserRouter>
            <ChakraProvider>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<HomeComponent />} />
                    <Route exact path="/home" element={<HomeComponent />} />
                    <Route
                        exact
                        path="/information"
                        element={<InfoComponent />}
                    />
                    <Route exact path="/cart" element={<CartComponent />} />
                    <Route
                        exact
                        path="/vehicles/cars"
                        element={<CarsComponent />}
                    />
                    <Route
                        exact
                        path="/vehicles/cars/:id"
                        element={<DetailsComponent />}
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
            </ChakraProvider>
        </BrowserRouter>
    );
}

export default App;
