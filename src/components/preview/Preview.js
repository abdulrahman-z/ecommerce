import React from "react";
import CollectionItem from "../collection-item/CollectionItem";
import "./preview.scss";

function Preview(props) {
  const { items, title } = props.item;
  return (
    <div className="collectionPreview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => {
            return <CollectionItem key={item.id} others={item} />;
          })}
      </div>
    </div>
  );
}

export default Preview;
