import { useCart } from "../useCart";
export const Cart: React.FC = () => {
  // We use our custom hook to get access to the cartItems from our context
  const { cartItems, removeFromCart } = useCart();

  // We calculate the total cost of the items in the cart
  const totalCost = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <div className="border p-4 rounded-md">
      <h2 className="font-bold text-lg mb-2">Shopping Cart</h2>

      {/* We map over the cartItems to display each one */}
      {cartItems.map((item) => (
        <div key={item.product.id} className="flex justify-between mb-2">
          <div>
            {/* We display the product name and the quantity */}
            <h3 className="font-bold">{item.product.name}</h3>
            <p>Quantity: {item.quantity}</p>
          </div>

          {/* We display the total cost for this product (price * quantity) */}
          <p>${(item.product.price * item.quantity).toFixed(2)}</p>

          <button
            onClick={() => removeFromCart(item.product)}
            className="text-sm text-red-500"
          >
            Remove
          </button>
        </div>
      ))}

      {/* We display the total cost of all items in the cart */}
      <p className="font-bold text-right">Total: ${totalCost.toFixed(2)}</p>
    </div>
  );
};
