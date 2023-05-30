// const Products = 
//   [
//     {
//       id: 1,
//       name: "Wireless Bluetooth Headphones",
//       description: "Experience high-quality sound with these wireless headphones that are compatible with all Bluetooth devices.",
//       price: "$ 59.99",
//       rating: 4,
//       reviews : 13,
//       image: "/images/wireless.jpeg",
//       category: "Electronics",
//       quantity: 34,
//     },
//     {
//       id: 2,
//       name: "Leather Messenger Bag",
//       description: "Carry your essentials in style with this durable leather messenger bag that includes multiple compartments for easy organization.",
//       price:"$ 139.99",
//       rating: 4.5,
//       reviews : 13,
//       image: "/images/leather_bag.jpeg",
//       category: "Fashion",
//       quantity: 23,
//     },
//     {
//       id: 3,
//       name: "Smartwatch",
//       description: "Stay connected and track your fitness with this smartwatch that includes a heart rate monitor and GPS.",
//       price: "$ 199.99",
//       rating: 3,
//       reviews : 13,
//       image: "/images/smartwatch.jpeg",
//       category: "Electronics",
//       quantity:20,
//     },
//     {
//       id: 4,
//       name: "Organic Cotton T-Shirt",
//       description: "Stay comfortable and stylish with this soft and breathable organic cotton t-shirt.",
//       price: "$ 24.99",
//       rating: 2.5,
//       reviews : 13,
//       image: "/images/cotton_tshirt.webp",
//       category: "Fashion",
//       quantity:0,

//     },
//     {
//       id: 5,
//       name: "Wireless Gaming Mouse",
//       description: "Get a competitive edge with this wireless gaming mouse that includes customizable buttons and precision tracking.",
//       price: "$ 79.99",
//       rating: 4.5,
//       reviews : 13,
//       image: "/images/mouse.jpg",
//       category: "Electronics",
//       quantity: 3
//     }
//   ]
const Products = [
  {
    user: '61683d7fddc8d46393b1edf5',
    name: 'Nike Air Max',
    image: '/images/nike-air-max.jpg',
    brand: 'Nike',
    category: 'Men Shoes',
    description: 'Comfortable and stylish shoes for men',
    reviews: [
      {
        name: 'John Doe',
        rating: 4.5,
        comment: 'Great shoes! Very comfortable and fit well.'
      },
      {
        name: 'Jane Smith',
        rating: 3.5,
        comment: 'Decent shoes, but a bit overpriced for the quality.'
      }
    ],
    rating: 4.0,
    numReviews: 2,
    price: 89.99,
    countInStock: 10
  },
  {
    user: '61683d7fddc8d46393b1edf5',
    name: 'Adidas Superstar',
    image: '/images/adidas-superstar.jpg',
    brand: 'Adidas',
    category: 'Women Shoes',
    description: 'Stylish and comfortable shoes for women',
    reviews: [
      {
        name: 'Bob Johnson',
        rating: 5.0,
        comment: 'Love these shoes! Great fit and very comfortable.'
      },
      {
        name: 'Sara Lee',
        rating: 4.0,
        comment: 'Nice shoes, but a bit narrow for my feet.'
      }
    ],
    rating: 4.5,
    numReviews: 2,
    price: 79.99,
    countInStock: 8
  }
];

  module.exports = Products;