/* EYEGLASSES products mattum. Puthu product venum-na keela oru line add pannunga.
   make(id, name, price, oldPrice, tag, shape, color)
   id: eyeglasses ku 1-99 kulla, yaarum repeat panna koodadhu */

const IMAGES = [
  "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85",
];

const make = (id, name, price, oldPrice, tag, shape, color, brand = null) => ({
  id,
  name,
  category: "Eyeglasses",
  price,
  oldPrice,
  tag,
  shape,
  color,
  brand,
  image: IMAGES[id % IMAGES.length],
});

export const eyeglasses = [
  make(1, "The Olivia", 2499, 3299, "BESTSELLER", "Round", "Champagne"),
  make(2, "The Rowan", 2799, 3499, "POPULAR", "Square", "Olive"),
  make(3, "The Hazel", 2299, 2999, "NEW", "Oval", "Tortoise Brown"),
  make(4, "The Avery", 1999, 2599, "EVERYDAY", "Rectangle", "Matte Black"),
  make(5, "The Eden", 2899, 3599, "PREMIUM", "Cat-eye", "Rose Gold", "ProDesign Denmark"),
  make(6, "The Willow", 2699, 3399, "POPULAR", "Round", "Forest Green"),
  make(7, "The Aria", 2199, 2799, "EVERYDAY", "Oval", "Crystal Clear"),
  make(8, "The Ivy", 2399, 2999, "NEW", "Rectangle", "Sage Green"),
  make(9, "The Theo", 1899, 2499, "VALUE PICK", "Square", "Gunmetal"),
  make(10, "The Remi", 2599, 3299, "POPULAR", "Cat-eye", "Amber"),
  make(11, "The Ellis", 2799, 3499, "PREMIUM", "Aviator", "Silver", "Ray-Ban"),
  make(12, "The Remington", 3099, 3899, "PREMIUM", "Square", "Tortoise", "Arcadio Milano"),
  make(13, "The Nova", 2099, 2699, "NEW", "Round", "Matte Black"),
  make(14, "The Cleo", 2749, 3449, "TRENDING", "Cat-eye", "Burgundy"),
  make(15, "The Arlo", 1949, 2549, "EVERYDAY", "Rectangle", "Navy Blue"),
  make(16, "The Mabel", 2349, 2999, "POPULAR", "Oval", "Honey Amber"),
  make(17, "The Jude", 2549, 3199, "BESTSELLER", "Square", "Midnight Black"),
  make(18, "The Piper", 2149, 2749, "NEW", "Round", "Rose Pink"),
  make(19, "The Ford", 2999, 3799, "PREMIUM", "Aviator", "Gold", "Ray-Ban"),
  make(20, "The Lyra", 2449, 3099, "TRENDING", "Cat-eye", "Smoky Grey"),
  make(21, "The Otis", 1849, 2399, "VALUE PICK", "Rectangle", "Brown"),
  make(22, "The Nell", 2299, 2899, "EVERYDAY", "Oval", "Mint Green"),
  make(23, "The Hugo", 2649, 3349, "POPULAR", "Square", "Walnut"),
  make(24, "The Wren", 2199, 2799, "NEW", "Round", "Lavender"),
  make(25, "The Dexter", 2899, 3599, "PREMIUM", "Rectangle", "Titanium", "Stepper Germany"),
  make(26, "The Maeve", 2499, 3199, "TRENDING", "Cat-eye", "Plum"),
  make(27, "The Cole", 1999, 2599, "EVERYDAY", "Square", "Slate Blue"),
  make(28, "The Tess", 2349, 2949, "NEW", "Oval", "Clear Pink"),
  make(29, "The Reid", 2749, 3449, "BESTSELLER", "Aviator", "Rose Gold"),
  make(30, "The Opal", 2599, 3249, "POPULAR", "Round", "Opal White"),
  make(31, "The Finn", 1899, 2449, "VALUE PICK", "Rectangle", "Charcoal"),
  make(32, "The Sage", 2299, 2899, "NEW", "Oval", "Olive Green"),
  make(33, "The Beau", 2699, 3399, "PREMIUM", "Square", "Dark Tortoise"),
  make(34, "The Iris", 2449, 3049, "TRENDING", "Cat-eye", "Crystal Brown"),
  make(35, "The Jasper", 2149, 2749, "EVERYDAY", "Round", "Copper"),
  make(36, "The Nora", 2549, 3199, "POPULAR", "Oval", "Soft Beige"),
];