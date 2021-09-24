import React from "react";
import "./collectionItem.scss";

function CollectionItem(props) {
  const { name, price, imageUrl } = props.others;

  return (
    <div className="collectionItem">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="info">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
}

export default CollectionItem;
