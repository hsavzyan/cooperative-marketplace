import { Business as BusinessType } from "../types";
import { Business } from "./Business";
import { useState } from "react";

type Props = {
  businesses: BusinessType[];
};

export const Marketplace: React.FC<Props> = ({ businesses }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // Add this line

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Add this function
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value);
  };

  let filteredBusinesses = businesses.filter(
    (business) =>
      business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      business.products.some((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  // Add this block
  filteredBusinesses = filteredBusinesses.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <div className="p-4">
      <h1 className="font-bold text-3xl mb-4">Cooperative Marketplace</h1>

      <input
        type="text"
        placeholder="Search businesses and products"
        value={searchTerm}
        onChange={handleSearchChange}
        className="mb-4 p-2 w-full border rounded-md"
      />

      {/* Add this dropdown */}
      <select
        value={sortOrder}
        onChange={handleSortChange}
        className="mb-4 p-2 w-full border rounded-md"
      >
        <option value="asc">Sort by name (A-Z)</option>
        <option value="desc">Sort by name (Z-A)</option>
      </select>

      {filteredBusinesses.map((business) => (
        <Business key={business.id} business={business} />
      ))}
    </div>
  );
};
