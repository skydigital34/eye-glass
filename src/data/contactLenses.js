/* CONTACT LENSES products
   make(id, name, price, oldPrice, tag, shape, color, image)
   id: contact lenses ku 201-299 kulla */

const IMAGES = [
  "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
];

const make = (id, name, price, oldPrice, tag, shape, color, imgIdx = 0) => ({
  id,
  name,
  category: "Contact Lenses",
  price,
  oldPrice,
  tag,
  shape, // used as Lens Type: "Daily Disposable", "Monthly Wear", "Color Lenses", "Toric Astigmatism", "Multifocal"
  color,
  image: IMAGES[imgIdx % IMAGES.length],
});

export const contactLenses = [
  make(201, "Olive AquaDaily Hydrate (30 Pack)", 1499, 1899, "BESTSELLER", "Daily Disposable", "Clear Aqua", 0),
  make(202, "Olive PureMoist Silicone Hydrogel", 1899, 2399, "POPULAR", "Monthly Wear", "Clear", 1),
  make(203, "Olive Hazel Glow ColorBlend", 1299, 1699, "TRENDING", "Color Lenses", "Hazel Brown", 3),
  make(204, "Olive BioComfort Toric for Astigmatism", 2199, 2799, "PREMIUM", "Toric Astigmatism", "Crystal Clear", 2),
  make(205, "Olive Emerald Green ColorBlend", 1299, 1699, "NEW", "Color Lenses", "Emerald Green", 0),
  make(206, "Olive TotalBreathe O2 Day & Night", 2499, 3199, "BESTSELLER", "Monthly Wear", "Ultra-Clear", 1),
  make(207, "Olive SilkTouch Daily Moisture (90 Pack)", 3899, 4999, "VALUE PACK", "Daily Disposable", "Clear Aqua", 2),
  make(208, "Olive Sapphire Sky ColorBlend", 1299, 1699, "POPULAR", "Color Lenses", "Sapphire Blue", 3),
  make(209, "Olive Precision MultiFocal Lenses", 2699, 3399, "PREMIUM", "Multifocal", "Clear", 0),
  make(210, "Olive FreshLook Honey Amber", 1349, 1749, "TRENDING", "Color Lenses", "Honey Amber", 1),
  make(211, "Olive HydroShield Monthly Toric", 2299, 2899, "SPECIALIST", "Toric Astigmatism", "Clear", 2),
  make(212, "Olive ActiveSport Moisture Lock", 1799, 2299, "NEW", "Daily Disposable", "Clear Aqua", 3),
];
