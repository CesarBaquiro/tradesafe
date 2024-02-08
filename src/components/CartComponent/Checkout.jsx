import { useCart } from "./CartContext";
import CartItemCard from "./CartItemCard";

const Checkout = () => {
    const { cart } = useCart();
    console.log("Productos en el carrito:", cart);

    return (
        <div>
            <h1>Shopping Cart</h1>
            {cart.map((product) => (
                <CartItemCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Checkout;
