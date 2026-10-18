/* SUNGLASSES products mattum. Puthu product venum-na keela oru line add pannunga.
   make(id, name, price, oldPrice, tag, shape, color)
   id: sunglasses ku 101-199 kulla, yaarum repeat panna koodadhu */

const IMAGES = [
  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=900&q=85",
];

const make = (id, name, price, oldPrice, tag, shape, color) => ({
  id,
  name,
  category: "Sunglasses",
  price,
  oldPrice,
  tag,
  shape,
  color,
  image: IMAGES[id % IMAGES.length],
});

export const sunglasses = [
  make(101, "The Sol", 1899, 2499, "NEW", "Cat-eye", "Tortoise"),
  make(102, "The Mira", 2199, 2899, "LIMITED", "Aviator", "Black"),
  make(103, "The Siena", 2599, 3299, "TRENDING", "Oversized", "Warm Brown"),
  make(104, "The Luna", 2399, 3099, "BESTSELLER", "Round", "Gold"),
  make(105, "The Kai", 1799, 2299, "NEW", "Square", "Black"),
  make(106, "The Coco", 2499, 3199, "TRENDING", "Cat-eye", "Tortoise"),
  make(107, "The Atlas", 2999, 3799, "PREMIUM", "Aviator", "Gold & Black"),
  make(108, "The Freya", 2699, 3399, "BESTSELLER", "Oversized", "Chocolate Brown"),
  make(109, "The Pearl", 2299, 2899, "NEW", "Oval", "Ivory"),
  make(110, "The Skye", 1999, 2599, "EVERYDAY", "Round", "Matte Brown"),
  make(111, "The Indie", 2399, 2999, "TRENDING", "Rectangle", "Olive Brown"),
  make(112, "The Solene", 2899, 3599, "LIMITED", "Cat-eye", "Champagne Gold"),
  make(113, "The Dune", 2099, 2699, "NEW", "Square", "Sand Beige"),
  make(114, "The Rio", 2349, 2999, "TRENDING", "Aviator", "Silver Mirror"),
  make(115, "The Ayla", 2549, 3249, "POPULAR", "Oversized", "Honey Tortoise"),
  make(116, "The Zane", 1949, 2549, "EVERYDAY", "Rectangle", "Matte Black"),
  make(117, "The Margot", 2799, 3499, "PREMIUM", "Cat-eye", "Burgundy"),
  make(118, "The Cruz", 2199, 2799, "NEW", "Round", "Blue Mirror"),
  make(119, "The Vera", 2649, 3349, "BESTSELLER", "Oval", "Rose Gold"),
  make(120, "The Blake", 1849, 2399, "VALUE PICK", "Square", "Gunmetal"),
  make(121, "The Sasha", 2449, 3099, "TRENDING", "Oversized", "Smoky Black"),
  make(122, "The Remy", 2299, 2899, "POPULAR", "Aviator", "Bronze"),
  make(123, "The Dahlia", 2749, 3449, "PREMIUM", "Cat-eye", "Plum"),
  make(124, "The Orion", 2599, 3299, "LIMITED", "Round", "Midnight Blue"),
  make(125, "The Tara", 1999, 2599, "EVERYDAY", "Oval", "Caramel"),
  make(126, "The Ezra", 2399, 3049, "NEW", "Rectangle", "Forest Green"),
  make(127, "The Coral", 2149, 2749, "TRENDING", "Square", "Coral Pink"),
  make(128, "The Magnus", 2899, 3649, "PREMIUM", "Aviator", "Gold"),
  make(129, "The Lola", 2499, 3149, "BESTSELLER", "Oversized", "Tortoise"),
  make(130, "The Kian", 1899, 2449, "VALUE PICK", "Round", "Matte Black"),
  make(131, "The Esme", 2349, 2949, "NEW", "Cat-eye", "Ivory"),
  make(132, "The Rowe", 2549, 3199, "POPULAR", "Rectangle", "Walnut"),
  make(133, "The Sienna", 2699, 3399, "TRENDING", "Oval", "Amber"),
  make(134, "The Jett", 2099, 2699, "EVERYDAY", "Square", "Jet Black"),
  make(135, "The Calla", 2799, 3499, "LIMITED", "Oversized", "Champagne"),
  make(136, "The Troy", 2249, 2849, "NEW", "Aviator", "Green Lens"),
];