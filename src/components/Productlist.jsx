import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

 const fetchProducts = async () => {
  try {
    const response = await axios.get('https://dummyjson.com/carts');
    const allProducts = response.data.carts
      .map(cart => cart.products) 
      .flat(); 
    setProducts(allProducts);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

  useEffect(() => {
    fetchProducts();
  }, []);

const filteredProducts = products.filter(product =>
  product.title.toLowerCase().includes(search.toLowerCase())
);
    

  return (
    <div>
      <div className="mb-4 flex items-center gap-4">
        <input
          type="text"
          placeholder="Search by name..."
          className="border p-2 rounded w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover rounded" />
            <h2 className="font-bold">{product.title}</h2>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
