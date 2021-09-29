import React from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cartActions";
import CustomButton from "../custom-button/CustomButton";
import "./collectionItem.scss";

function CollectionItem({ others, addToCart }) {
  const { name, price, imageUrl } = others;

  return (
    <div className="collectionItem">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="info">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addToCart(others)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
