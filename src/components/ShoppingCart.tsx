import { clearCart, removeFromCart } from "../redux/cartSlice"
import { useAppDispatch, useAppSelector } from "../redux/store"

const ShoppingCart = () => {
    const cartItems = useAppSelector((state) => state.cart.items)
    const dispatch = useAppDispatch()

    let total = 0
    for (const item of cartItems) {
        total += item.price
    }

    const handleCheckout = () => {
        dispatch(clearCart())
        sessionStorage.removeItem('cart')
        alert('Checkout Successful!')
    }

  return (
    <div>
        <h1>Current Shopping Cart:</h1>
        {cartItems.map((item) => (
            <div key={item.id}>
                <h3>{item.title}</h3>
                <img src={item.image} alt={item.title} />
                <p>{item.price}</p>
                <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
            </div>
        ))}
        <div>
            <h4>Total: ${total}</h4>
            <button onClick={handleCheckout}>Checkout</button>
        </div>
    </div>
  )
}
export default ShoppingCart