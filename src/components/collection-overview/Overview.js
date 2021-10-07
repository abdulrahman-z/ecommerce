import React from "react";
import { connect } from "react-redux";
import Preview from "../../components/preview/Preview";
import { selectPreviewCollection } from "../../redux/shop/shopSelectors";
import { createStructuredSelector } from "reselect";
import "./overview.scss";

function Overview({ collection }) {
  return (
    <div className="collectionOverview">
      {collection.map((item) => {
        return <Preview key={item.id} item={item} />;
      })}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collection: selectPreviewCollection,
});

export default connect(mapStateToProps)(Overview);
