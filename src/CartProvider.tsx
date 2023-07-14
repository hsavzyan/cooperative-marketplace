import { createContext, useState, ReactNode } from "react";
import { Product } from "./types";

// Define the type for a cart item
type CartItem = {
  product: Product;
  quantity: number;
};

// Define the type for the cart context
export type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
};

// Create the cart context with an undefined default value
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

type Props = {
  children: ReactNode;
};

// Define the CartProvider component
export const CartProvider: React.FC<Props> = ({ children }) => {
  // Define the cartItems state variable
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Define the addToCart function
  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id
      );
      if (existingItem) {
        // If the product is already in the cart, increase the quantity
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If the product is not in the cart, add it
        return [...prevItems, { product, quantity: 1 }];
      }
    });
  };

  // Define the removeFromCart function
  const removeFromCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id
      );
      if (existingItem && existingItem.quantity > 1) {
        // If the product is in the cart and the quantity is more than 1, decrease the quantity
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        // If the product is in the cart and the quantity is 1, remove the item
        return prevItems.filter((item) => item.product.id !== product.id);
      }
    });
  };

  // Provide the cartItems, addToCart, and removeFromCart in the CartContext.Provider
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
