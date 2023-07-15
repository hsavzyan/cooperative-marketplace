import { useCart } from "../useCart";

export const Cart: React.FC = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalCost = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <div className="border border-blue-300 p-4 rounded-md shadow-md">
      <h2 className="font-semibold text-lg mb-2">Shopping Cart</h2>

      {cartItems.map((item) => (
        <div
          key={item.product.id}
          className="flex flex-col md:flex-row justify-between items-center border-b border-gray-200 py-2"
        >
          <div className="mb-2 md:mb-0">
            <h3 className="font-semibold">{item.product.name}</h3>
            <p>Quantity: {item.quantity}</p>
          </div>

          <p className="mb-2 md:mb-0">
            ${(item.product.price * item.quantity).toFixed(2)}
          </p>

          <button
            onClick={() => removeFromCart(item.product)}
            className="text-sm text-white bg-red-500 px-2 py-1 rounded-md hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      ))}

      <p className="font-semibold text-right">Total: ${totalCost.toFixed(2)}</p>
    </div>
  );
};
