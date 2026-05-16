import { useCartStore } from "../store/useCartStore"
import { Link } from "react-router-dom";

export default function Header(){
    const cartItems = useCartStore((state)=> state.cartItems);
return(
    <header>
        <h1 className="bg-orange-500 text-white font-bold flex justify-between items-center sticky top-0 z-50">
            <Link to='/'>
            <span className="ml-3">TechBurger</span>
            </Link>
            <Link to='/cart'>
            <span className= "bg-orange-600 mr-3">{cartItems.length} tuotetta</span>
            </Link>
        </h1>
    </header>
)
}