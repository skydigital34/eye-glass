import { eyeglasses } from "./eyeglasses.js";
import { sunglasses } from "./sunglasses.js";
import { contactLenses } from "./contactLenses.js";

export { eyeglasses, sunglasses, contactLenses };

export const products = [...eyeglasses, ...sunglasses, ...contactLenses];

export const money = (n) => "₹" + n.toLocaleString("en-IN");