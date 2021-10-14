import React from "react";
import { useHistory } from "react-router";
import CollectionItem from "../collection-item/CollectionItem";
import "./preview.scss";

function Preview(props) {
  const { items, title } = props.item;
  const history = useHistory();
  return (
    <div className="collectionPreview">
      <h1
        className="title"
        onClick={() =>
          history.push(`${history.location.pathname}/${title.toLowerCase()}`)
        }
      >
        {" "}
        {title.toUpperCase()}
      </h1>
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
