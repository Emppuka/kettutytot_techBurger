import { Link } from 'react-router-dom'
import { useCartStore } from '../store/useCartStore';

const CartView = () => {
    const {cartItems} = useCartStore();

    return(
        <main className="p-4">
            <header className='mb-6'>
                <Link to="/">Back to menu
                </Link>
            </header>
            {cartItems.length === 0 ?(
                <div className='text-center py-10'>
                    <h2 className='text-xl font-semibold'>You cart is empty!</h2>
                </div>
            ): (
                <div className='text-xl'>Items in your cart: {cartItems.length}
                </div>
            )}
        </main>
    )
}

export default CartView;