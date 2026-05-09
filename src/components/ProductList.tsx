import { useEffect, useState } from "react";
import type { Product } from "../types";
import ProductCard from "./ProductCard";
import Modal from "./Modal";
import { useCartStore } from "../store/useCartStore";
import { fetchProducts } from "../services/api";

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const addToCart = useCartStore((state) => state.addToCart);
  const categories = ['all', 'burgers', 'sides', 'drinks'];

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts();

        setProducts(data);
      } catch (error) {
        setError("Could not load products");
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (isLoading) {
  return (
    <p className="bg-amber-800 text-yellow-200 text-center flex items-center justify-center p-2">
      <svg className="animate-spin mr-3 size-5" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Loading products...
    </p>
  );
}

  if (error) {
    return <p className="bg-red-50 text-center text-red-600 p-8 rounded-2x1">{error}</p>;
  }

  const filteredProducts =
  activeCategory === "all"
    ? products
    : products.filter((product) => product.category === activeCategory);

  return (
    
  <div>
    <div className="flex gap-4 mb-8 overflow-x-auto pb-2 justify-start md:justify-center ">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`px-6 py-2 rounded-full font-bold transition-all capitalize ${
            activeCategory === cat
              ? "bg-orange-500 text-white shadow-md" // Active Style
              : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-50" // Inactive Style
          }`}
        >
          {cat}
        </button>
      ))}
    </div>

      <section className="max-w-[1200px] mx-auto grid grid-cols-1 gap-8 md:grid-cols-3 px-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={setSelectedProduct}
          />
        ))}
      </section>

      {selectedProduct && (
        <Modal onClose={() => setSelectedProduct(null)}>
          <div className="flex flex-col gap-4">
            <img 
              src={selectedProduct.image} 
              className="h-64 object-cover w-full" 
              alt={selectedProduct.name} 
            />
            <div className="px-4">
              <h2 className="text-xl font-bold">{selectedProduct.name}</h2>
              <p className="text-gray-500">{selectedProduct.price} €</p>
              <p className="mt-2 text-sm">{selectedProduct.description}</p>
            </div>
            <div className="p-4">
              <button
              onClick={() => {
                  addToCart(selectedProduct);
                  setSelectedProduct(null);
                }}
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold">
                Add to Cart
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default ProductList;