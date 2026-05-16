import type { Product } from "../types";

interface ProductCardProps{
    product: Product;
    onSelect: (product: Product) => void;
    addToCart: (product: Product) => void;
}

export default function ProductCard({product, onSelect, addToCart}: ProductCardProps){
    return(
        <div onClick={() => onSelect(product)} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all size-90">
            <img
             src={product.image}
             alt={product.name}
            className="h-48 w-full object-cover"/>
            
            <div className="p-4 flex flex-col gap-2 items-center">
                <span className="font-bold">{product.name}</span>
                <span>{product.price} €</span>
                <span className="text-sm text-gray-500 text-center line-clamp-2">
                    {product.description}
                </span>

            <button 
  onClick={(e) => {
    e.stopPropagation();
    addToCart(product);
  }} 
  className="px-3 py-1 text-xs font-bold text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors shadow-sm active:scale-95"
>
  Add to Cart
</button>
            
                
            </div>
        </div>
    )
}