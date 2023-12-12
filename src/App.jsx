import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

function App() {
    // 2. Wrap ChakraProvider at the root of your app
    return (
        <ChakraProvider>
            <NavBar />
            <ItemListContainer />
        </ChakraProvider>
    );
}

export default App;
