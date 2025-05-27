import { addToCart } from "../redux/cartSlice";
import { useAppDispatch } from "../redux/store"
import { Product } from "../types/types"

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const dispatch = useAppDispatch();
  return (
    <div>
        <h3>{product.title}</h3>
        <p>{product.price}</p>
        <img src={product.image} alt={product.title} />
        <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  )
}
export default ProductCard