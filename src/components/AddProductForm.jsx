import React, { useState } from 'react';
import axios from 'axios';

const AddProductForm = () => {
  const [form, setForm] = useState({
    name: '',
    price: '',
    type: '',
    img: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://6821a748259dad2655b002e6.mockapi.io/products/product/products', form);
      alert('Product added');
      setForm({ name: '', price: '', type: '', img: '' });
    } catch (error) {
      console.error('Error :', error);
      alert('Errror.');
    }
  };

  return (
   <div className='container m-auto '>
     <form onSubmit={handleSubmit} className="space-y-4 m-auto w-[30%]">
      <h2 className="text-xl font-semibold">Add New Product</h2>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Product Name"
        className="border p-2 w-full rounded"
        required
      />
      <input
        name="price"
        type="number"
        value={form.price}
        onChange={handleChange}
        placeholder="Price"
        className="border p-2 w-full rounded"
        required
      />
      <input
        name="type"
        value={form.type}
        onChange={handleChange}
        placeholder="Type"
        className="border p-2 w-full rounded"
      />
      <input
        name="img"
        value={form.img}
        onChange={handleChange}
        placeholder="Image URL"
        className="border p-2 w-full rounded"
      />
      <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
        Add Product
      </button>
    </form>
   </div>

  );
};

export default AddProductForm;
