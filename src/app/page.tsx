
"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductDetail from "@/components/Modals/product-detail";



 export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProduct(null);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full p-6">
      <div className="w-full max-w-7xl ">
         <div className="sticky top-0 w-full  z-10">
          <input
            type="text"
            placeholder="Search products"
            value={searchQuery}
            onChange={handleSearch}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 overflow-auto h-[calc(100vh-5rem) custom-scrollbar">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="p-4 border border-gray-300 rounded cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
              <h2 className="mt-2 text-lg font-semibold text-white">{product.title}</h2>
              <p className="text-white">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
      <ProductDetail 
      product={selectedProduct}
      open={modalIsOpen}
      onClose={closeModal}/>
    </main>
  );
}
