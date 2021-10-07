import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../../components/collection-item/CollectionItem";
import { selectCollection } from "../../../redux/shop/shopSelectors";
import "./collection.scss";

function Collection({ collection }) {
  const { title, items } = collection;
  return (
    <div className="collectionPage">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item) => {
          return <CollectionItem key={item.id} others={item} />;
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state, others) => {
  return { collection: selectCollection(others.match.params.id)(state) };
};

export default connect(mapStateToProps)(Collection);
