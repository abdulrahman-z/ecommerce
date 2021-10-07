import React from "react";
import { connect } from "react-redux";
import MenuItem from "../menu-items/MenuItem";
import "./directory.scss";
import { directorySectionSelector } from "../../redux/directory/directorySelectors";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => {
  return (
    <div className="item-container">
      {sections.map((section) => {
        return (
          <MenuItem
            key={section.id}
            title={section.title}
            image={section.imageUrl}
            size={section.size}
            link={section.linkUrl}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: directorySectionSelector,
});

export default connect(mapStateToProps)(Directory);
