import { eyeglasses } from "./eyeglasses.js";
import { sunglasses } from "./sunglasses.js";

export { eyeglasses, sunglasses };

export const products = [...eyeglasses, ...sunglasses];

export const money = (n) => "₹" + n.toLocaleString("en-IN");