import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  console.log("cart", products);
  const dispatch=useDispatch()
  const handleRemove=(id)=>{
    dispatch(remove(id))

  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {products.map((product) => (
        <div
          className="card w-96 bg-base-100 shadow-xl mt-10 flex flex-col items-center"
          key={product.id}
        >
          <figure>
            <img src={product.image} alt="Shoes" width={120} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p className="flex-grow-0">{product.description}</p>
            <p>{product.price}</p>
            <p>{product.category}</p>
            <div className="card-actions justify-end"></div>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => handleRemove(product.id)}
              >
               Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
