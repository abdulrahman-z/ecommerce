import { createSelector } from "reselect";

const shopSelector = (state) => state.shop;

export const selectCollections = createSelector(
  [shopSelector],
  (item) => item.collection
);

export const selectCollection = (collectionUrlMatcher) =>
  // console.log(1 === collectionMapper[collectionUrlMatcher]);
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlMatcher]
  );

export const selectPreviewCollection = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);
