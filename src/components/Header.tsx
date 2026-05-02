import { useCartStore } from "../store/useCartStore"

export default function Header(){
    const cartItems = useCartStore((state)=> state.cartItems);
return(
    <header>
        <h1 className="bg-orange-500 text-white font-bold flex justify-between items-center sticky top-0 z-50">
            <span>TechBurger</span>
            <span className= "bg-orange-600">{cartItems.length} tuotetta</span>
        </h1>
    </header>
)
}