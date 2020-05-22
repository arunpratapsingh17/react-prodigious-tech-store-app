// helper functions

import url from "./URL";

export function flattenProducts(data) {
  return data.map((item) => {
    let image = `${item.image.formats.small.url}`;
    return { ...item, image };
  });
}

export function featuredProducts(data) {
  return data.filter((item) => {
    return item.featured === true;
  });
}
