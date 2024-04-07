import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const Product = ({ product }) => {
  console.log("single product", product);
  const { title, image, price, description, category } = product;
  const dispatch=useDispatch();
  const handleAdd=(product)=>{
    dispatch(add(product))
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-10">
      <figure>
        <img src={image} alt="Shoes" width={120} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p>{price}</p>
        <p>{category}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={()=>handleAdd(product)}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};
Product.propTypes = {
  product: PropTypes.object,
};
export default Product;
