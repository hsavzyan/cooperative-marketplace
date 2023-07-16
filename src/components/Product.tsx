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
    <div className="flex flex-col justify-between border border-secondary p-4 rounded-md shadow-md h-full">
      <div>
        <h2 className="font-semibold text-lg">{product.name}</h2>
        <p>${product.price.toFixed(2)}</p>
      </div>
      <button
        onClick={handleAddToCartClick}
        className="mt-2 bg-accent text-light px-2 sm:px-4 py-2 rounded-md hover:bg-accent-dark self-end w-full sm:w-auto"
      >
        Add to Cart
      </button>
    </div>
  );
};
