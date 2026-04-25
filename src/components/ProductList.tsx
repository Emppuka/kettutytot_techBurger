import  useEffect, { useState }  from "react";
import  Product  from "../types";
import  ProductCard  from "./ProductCard";

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://techburger-api.onrender.com");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        setError("Could not load products");
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (isLoading) {
    return <p className="text-center">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {products.map((product) => (
        <ProductCard 
        key={product.id}
        product={product}
        onSelect={setSelectedProduct}
         />
      ))}
    </section>
  );
}