import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import InfoComponent from "./components/InfoComponent/InfoComponent";
import CartComponent from "./components/CartComponent/CartComponent";
import CarsComponent from "./components/CarsComponent/CarsComponent";

function App() {
    // 2. Wrap ChakraProvider at the root of your app
    return (
        <BrowserRouter>
            <ChakraProvider>
                <NavBar />
                <Routes>
                    <Route exact path="/home" element={<HomeComponent />} />
                    <Route
                        exact
                        path="/information"
                        element={<InfoComponent />}
                    />
                    <Route exact path="/cart" element={<CartComponent />} />
                    <Route exact path="/cars" element={<CarsComponent />} />
                </Routes>
            </ChakraProvider>
        </BrowserRouter>
    );
}

export default App;
