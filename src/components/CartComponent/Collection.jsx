/* eslint-disable no-unused-vars */
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

const Collection = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const db = getFirestore();

        const itemsCollection = collection(db, "carros");

        getDocs(itemsCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => doc.data());
            setProducts(docs);
        });
    }, []);
};

export default Collection;
