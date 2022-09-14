import image from "../asset/imagePlaceholder.png";
export const getImage = (path, width) => {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : image;
};
