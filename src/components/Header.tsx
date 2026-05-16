import { useCartStore } from "../store/useCartStore"
import { Link } from "react-router-dom";

export default function Header(){
    const cartItems = useCartStore((state)=> state.cartItems);
return(
    <header className="fixed top-0 left-0 w-full z-50">
        <h1 className="bg-orange-500 text-white font-bold flex justify-between items-center">
            <Link to='/'>
            <span className="ml-3">TechBurger</span>
            </Link>
            <Link to='/cart'>
            <span className= "mr-3">{cartItems.length} tuotetta</span>
            </Link>
        </h1>
    </header>
)
}