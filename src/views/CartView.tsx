import { Link } from 'react-router-dom'
import { useCartStore } from '../store/useCartStore';

const CartView = () => {
    const {cartItems} = useCartStore();
    const totalPrice = cartItems.reduce((acc , item) => acc + item.price, 0);

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
                <div className=''>{cartItems.map((item, index) => (
                    <div key={item.id} className='flex items-center gap-4 p-4 border-b border-gray-100'>
                        <div className='flex items-center gap-4 p-4 border-b border-gray-100'>
                            <img src={item.image}
                             alt={item.name}
                             className='w-16 h-16 object-cover rounded-lg' />
                            <h3 className="font-semibold text-lg">{item.name}</h3>
                            <h3 className="font-semibold text-lg">{item.price}€</h3>
                        </div>
                    </div>
                ))}
                <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
            <div className="flex justify-between items-center text-xl font-bold">
              <span>Total Sum:</span>
              <span className="text-green-600">{totalPrice.toFixed(2)} €</span>
            </div>
            
            <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold">
              Proceed to Checkout
            </button>
          </div>
                </div>
            )}
        </main>
    )
}

export default CartView;