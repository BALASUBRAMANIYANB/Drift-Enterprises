export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  category: string;
};

export const products: Product[] = [
  {
    id: "1",
    title: "Noise Cancelling Wireless Headphones",
    description:
      "Over-ear Bluetooth headphones with active noise cancelling and 30 hours of battery life.",
    price: 129.99,
    rating: 4.5,
    image:
      "https://images.pexels.com/photos/373945/pexels-photo-373945.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Electronics",
  },
  {
    id: "2",
    title: "Smart LED 4K TV 55\"",
    description:
      "Ultra HD 4K smart TV with HDR, built-in streaming apps, and voice remote.",
    price: 699.99,
    rating: 4.7,
    image:
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Electronics",
  },
  {
    id: "3",
    title: "Ergonomic Office Chair",
    description:
      "Adjustable ergonomic office chair with lumbar support and breathable mesh back.",
    price: 189.0,
    rating: 4.3,
    image:
      "https://images.pexels.com/photos/8111329/pexels-photo-8111329.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Home & Kitchen",
  },
  {
    id: "4",
    title: "Stainless Steel Cookware Set, 12-Piece",
    description:
      "Premium stainless steel pots and pans set, compatible with all cooktops.",
    price: 149.99,
    rating: 4.6,
    image:
      "https://images.pexels.com/photos/1161467/pexels-photo-1161467.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Home & Kitchen",
  },
  {
    id: "5",
    title: "Hardcover Fiction Bestseller",
    description:
      "A gripping, bestselling novel in hardcover with exclusive bonus chapter.",
    price: 24.99,
    rating: 4.8,
    image:
      "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Books & Audible",
  },
  {
    id: "6",
    title: "Essential Skin Care Set",
    description:
      "Daily skincare routine kit including cleanser, serum, and moisturizer.",
    price: 59.99,
    rating: 4.4,
    image:
      "https://images.pexels.com/photos/3738364/pexels-photo-3738364.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Beauty & Personal Care",
  },
  {
    id: "7",
    title: "POCO M7 5G - 6/128 GB",
    description:
      "6 GB RAM, 128 GB storage (expandable up to 1 TB) with a 17.48 cm (6.88 inch) HD+ display, 50MP rear camera, 8MP front camera, 5160 mAh battery, and 4 Gen 2 5G processor.",
    price: 9350.0,
    rating: 4.4,
    image: "/assets/mobiles/poco/poco-m7-5g.jpg",
    category: "Mobiles",
  },
];


