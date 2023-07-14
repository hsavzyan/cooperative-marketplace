import { useCart } from "../useCart";
import { Product as ProductType } from "../types";
type Props = {
  product: ProductType;
};

export const Product: React.FC<Props> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCartClick = () => {
    addToCart(product);
  };

  return (
    <div className="border p-4 rounded-md">
      <h2 className="font-bold text-lg">{product.name}</h2>
      <p>${product.price.toFixed(2)}</p>
      <button
        onClick={handleAddToCartClick}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Add to Cart
      </button>
    </div>
  );
};
