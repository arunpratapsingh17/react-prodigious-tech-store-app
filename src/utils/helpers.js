// helper functions

import url from "./URL";

export function flattenProducts(data) {
  return data.map((item) => {
    let image = `${item.image.formats.url}`;
    console.log("TO produce image");
    console.log(image);

    return { ...item, image };
  });
}

export function featuredProducts(data) {
  return data.filter((item) => {
    return item.featured === true;
  });
}
