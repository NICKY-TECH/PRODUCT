import { v4 as uuid } from "uuid";
import im1b from "../images/image-product-1-thumbnail.jpg";
import im2b from "../images/image-product-2-thumbnail.jpg";
import im3b from "../images/image-product-3-thumbnail.jpg";
import im4b from "../images/image-product-4-thumbnail.jpg";
import im1 from "../images/image-product-1.jpg";
import im2 from "../images/image-product-2.jpg";
import im3 from "../images/image-product-3.jpg";
import im4 from "../images/image-product-4.jpg";

export const thumbnail = [
  {
    url: im1b,
    id: uuid(),
    parents: im1,
    index:0
  },
  {
    url: im2b,
    id: uuid(),
    parents: im2,
    index:1
  },
  {
    url: im3b,
    id: uuid(),
    parents: im3,
    index:2
  },
  {
    url: im4b,
    id: uuid(),
    parents: im4,
    index:3
  },
];
