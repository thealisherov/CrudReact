import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import ProductList from "./components/Productlist";
import NewProducts from "./components/NewProducts";

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/carts");
    const allProducts = [];
response.data.carts.forEach(cart => {
  cart.products.forEach(product => {
    allProducts.push(product);
  });
});
  
    setProducts(allProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Router>
      <header className=" p-4 shadow-2xl bg-gray-100">
        <nav className="container m-auto flex justify-between items-center">
         
          <h1 className="text-xl font-bold">My Shop</h1>  
         
         
          <Link to="/newproducts" className="text-blue-500 hover:underline">
            New Products
          </Link>
        </nav>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <div className="p-6 max-w-4xl mx-auto">
              <h1 className="text-2xl font-bold mb-4">Product Page</h1>
              <ProductList products={products} />
              <hr className="my-6" />
             
            </div>
          }
        />
        <Route path="/newproducts" element={<NewProducts />} />
       

      </Routes>
    </Router>
  );
};

export default App;
