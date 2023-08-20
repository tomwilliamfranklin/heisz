export type Product = {
  id: string; // used for mapping. Name of md file.
  name: string;
  shortDesc: string;
  cover: string;
  releaseDate: Date;
  price: string;
  imageGallery: {
    image: string;
    caption: string;
  }[];
};
