import React, { useEffect, useState } from "react";
import AddProductForm from "./AddProductForm";
import axios from "axios";

const NewProducts = () => {
  const [newProducts, setNewProducts] = useState([]);

  const fetchNewProducts = async () => {
    try {
      const response = await axios.get(
        "https://6821a748259dad2655b002e6.mockapi.io/products/product/products"
      );
      setNewProducts(response.data);
    } catch (error) {
      console.error("Error fetching new products:", error);
    }
  };

  useEffect(() => {
    fetchNewProducts();
  }, []);

  return (
    <div>
      <div className="mt-10 container m-auto">
        <h2 className="text-xl font-bold mb-4">New Products </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 align-middle">
          {newProducts.map((product) => (
            <div
              key={product.id}
              className=" w-[400px] border p-4 rounded shadow"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="font-semibold">{product.name}</h3>
              <p>Price: ${product.price}</p>
              <p>Type: {product.type}</p>
            </div>
          ))}
        </div>
      </div>
      <AddProductForm />
    </div>
  );
};

export default NewProducts;
