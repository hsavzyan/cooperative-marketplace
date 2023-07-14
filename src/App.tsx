import { Marketplace } from "./components/Marketplace";
import { Cart } from "./components/Cart";
import { businesses } from "./data";

export const App: React.FC = () => {
  return (
    <div className="flex">
      <div className="w-2/3 p-4">
        <Marketplace businesses={businesses} />
      </div>
      <div className="w-1/3 p-4 border-l">
        <Cart />
      </div>
    </div>
  );
};
