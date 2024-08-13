import React, { createContext, useState } from 'react';

// Create a context for the products
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // State to store all products
  const [allProducts] = useState([
    { title: 'Iphone 13 Max', description: '', price: 130, image: 'https://images.unsplash.com/photo-1695822822491-d92cee704368?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Iphone 14 Pro', description: '', price: 120, image: 'https://images.unsplash.com/photo-1695048132783-4b9f77bde5be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGlwaG9uZSUyMDE1fGVufDB8fDB8fHww' },
    { title: 'MacBook Air', description: '', price: 120, image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Mac Book Pro', description: '', price:50, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Mac Book 2', description: '', price:90, image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { title: 'Mac Book M14', description: '', price:90, image: 'https://images.unsplash.com/photo-1644659306528-259903deccde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fG1hY2Jvb2t8ZW58MHx8MHx8fDA%3D' },
    { title: 'Oneplus 11R', description: '', price:80, image: 'https://images.unsplash.com/photo-1673718424091-5fb734062c05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFuZHJvaWQlMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D' },
    { title: 'Samsung S10 Lite', description: '', price:100, image: 'https://images.unsplash.com/photo-1647880087577-92da45fea280?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Oneplus 10T', description: '', price:20, image: 'https://www.ytechb.com/wp-content/uploads/2023/01/OnePlus-11-Wallpapers.webp' },
    { title: 'Galaxy Z fold', description: '', price:10, image: 'https://s.yimg.com/ny/api/res/1.2/U_sxVyjJZtlNusOrdi0XmQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQwMA--/https://s.yimg.com/os/creatr-uploaded-images/2020-09/6761ff60-ec17-11ea-bdfe-82eb8495e75d' },
    { title: 'Sony Devil Woofer', description: '', price:10, image: 'https://t3.ftcdn.net/jpg/05/73/85/50/360_F_573855027_2Brs00J529282uhCAor3N46zvkx9Yba3.jpg' },
    { title: 'Acer Predator', description: '', price:30, image: 'https://cafebiz.cafebizcdn.vn/thumb_w/600/162123310254002176/2023/12/9/photo1702038053677-17020380537991339619173-1702092817880710110384.png' },

    
    {  title: 'Sony Bravia (75 inch)', description: '6 months', price: 700, image: 'https://p.rmjo.in/productSquare/2n4lkt7c-500x500.webp'},
    { title: 'Leo Reversible Lounger Sofa', description: '1 year', price: 450, image: 'https://p.rmjo.in/productSquare/v2zmo735-500x500.webp' },
    { title: 'Oven Toaster Griller- 48 L', description: '1 year', price:150 , image: 'https://core.rentity.in/assets/1_5_37eebcd0-efd2-448a-853a-4c2b689e139f__preview.jpg' },
    { title: 'Brooklyn King Bed', description: 'veg', price:30, image: 'https://p.rmjo.in/productSquare/u353kih8-500x500.webp' },
    { title: 'Double Door Fridge', description: 'Per month', price:100, image: 'https://p.rmjo.in/productSquare/00znvje5-500x500.webp' },
    { title: '1.5 Ton 3 Star AC', description: '6 months', price:90, image: 'https://p.rmjo.in/productSquare/xve5kksr-500x500.webp' },
    { title: 'Front Load Washing Machine', description: '1 year', price:90, image: 'https://p.rmjo.in/moodShot/25qqgsem-1024x512.webp' },
    { title: 'Titan Pro Gaming Chair', description: '3 years', price:800, image: 'https://p.rmjo.in/moodShot/8gtqmjyy-1024x512.webp' },
    { title: 'Aroura Single Bed Cushion ', description: '5 years', price:1000, image: 'https://p.rmjo.in/productSquare/why0zew9-500x500.webp' },
    { title: 'Stowy 2- Door Wardrobe', description: '5 years', price:200, image: 'https://p.rmjo.in/moodShot/4p5flrv2-1024x512.webp' },
    { title: 'Casper L-Shaped Fabric Sofa ', description: '5 years', price:100, image: 'https://p.rmjo.in/productSquare/jhsspfzv-500x500.webp' },
    { title: 'Smart LED 43 inch FHD TV', description: '2 years', price:100, image: 'https://p.rmjo.in/moodShot/fdhrg1b4-1024x512.webp' },
    { title: 'Miller Wood Queen Bed', description: '5 years', price:3000, image: 'https://p.rmjo.in/productSquare/hbod06kx-500x500.webp' },
    { title: 'IKEA Poang Rocking Chair', description: 'Per month', price:340, image: 'https://p.rmjo.in/productSquare/m8g7vk2n-500x500.webp' },
    { title: 'Marley Queen Bed (6x5)', description: '5 months', price:300, image: 'https://p.rmjo.in/productSquare/3r4rszns-500x500.webp' },
    { title: 'Reversible Lounger Sofa', description: '5 years', price:300, image: 'https://plus.unsplash.com/premium_photo-1683141389818-77fd3485334b?q=80&w=1876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Marvel TV Unit', description: 'veg', price:30, image: 'https://p.rmjo.in/productSquare/khai5gzi-500x500.webp' },
    { title: 'Leonard TV Unit (Walnut)', description: 'veg', price:30, image: 'https://p.rmjo.in/productSquare/ndt903mz-500x500.webp' },
    { title: 'Casper fabric sofa', description: 'veg', price:30, image: 'https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { title: 'Aurora Wooden Queen Bed', description: 'veg', price:30, image: 'https://p.rmjo.in/productSquare/u5j0j47b-500x500.webp' },


    { title: 'LG 7kg Front load 1200rpm', description: '6 months', price: 7000, image: 'https://p.rmjo.in/productSquare/2n4lkt7c-500x500.webp' },
    { title: 'Oven Toaster Griller- 48 L', description: '1 year', price: 1500, image: 'https://core.rentity.in/assets/1_5_37eebcd0-efd2-448a-853a-4c2b689e139f__preview.jpg' },
    { title: 'Double Door Fridge (240 Litre)', description: 'Per month', price: 1000, image: 'https://p.rmjo.in/productSquare/00znvje5-500x500.webp' },
    { title: '1.5 Ton 3 Star AC', description: 'AC unit', price: 9000, image: 'https://p.rmjo.in/productSquare/xve5kksr-500x500.webp' },
    { title: 'Front Load Washing Machine', description: 'Washing machine', price: 9000, image: 'https://p.rmjo.in/moodShot/25qqgsem-1024x512.webp' },
    { title: 'Smart LED 43 inch FHD TV', description: 'LED TV', price: 10000, image: 'https://p.rmjo.in/moodShot/fdhrg1b4-1024x512.webp' },
    { title: 'Marvel TV Unit', description: 'TV unit', price: 3000, image: 'https://p.rmjo.in/productSquare/khai5gzi-500x500.webp' },
    { title: 'Leonard TV Unit (Walnut)', description: 'TV unit', price: 3000, image: 'https://p.rmjo.in/productSquare/ndt903mz-500x500.webp' },


    { title: 'Leo Reversible Lounger Sofa', description: '1 year', price: 4500, image: 'https://p.rmjo.in/productSquare/v2zmo735-500x500.webp' },
    { title: 'Brooklyn King Bed', description: 'King size bed', price: 3000, image: 'https://p.rmjo.in/productSquare/u353kih8-500x500.webp' },
    { title: 'Titan Pro Gaming Chair', description: 'Ergonomic gaming chair', price: 800, image: 'https://p.rmjo.in/moodShot/8gtqmjyy-1024x512.webp' },
    { title: 'Aurora Single Bed Cushion', description: 'Comfortable single bed', price: 1000, image: 'https://p.rmjo.in/productSquare/why0zew9-500x500.webp' },
    { title: 'Stowy 2-Door Wardrobe', description: 'Spacious wardrobe', price: 2000, image: 'https://p.rmjo.in/moodShot/4p5flrv2-1024x512.webp' },
    { title: 'Casper L-Shaped Fabric Sofa', description: 'L-shaped sofa', price: 4000, image: 'https://p.rmjo.in/productSquare/jhsspfzv-500x500.webp' },
    { title: 'Miller Wood Queen Bed', description: 'Queen size bed', price: 3500, image: 'https://p.rmjo.in/productSquare/hbod06kx-500x500.webp' },
    { title: 'IKEA Poang Rocking Chair', description: 'Comfortable rocking chair', price: 1000, image: 'https://p.rmjo.in/productSquare/m8g7vk2n-500x500.webp' },
    { title: 'Marley Queen Bed (6x5)', description: 'Queen size bed', price: 3000, image: 'https://p.rmjo.in/productSquare/3r4rszns-500x500.webp' },
    { title: 'Reversible Lounger Sofa', description: 'White lounger sofa', price: 4500, image: 'https://plus.unsplash.com/premium_photo-1683141389818-77fd3485334b?q=80&w=1876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Casper Fabric Sofa', description: 'Comfortable fabric sofa', price: 3000, image: 'https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { title: 'Aurora Wooden Queen Bed', description: 'Wooden queen bed', price: 3500, image: 'https://p.rmjo.in/productSquare/u5j0j47b-500x500.webp' },


    // Add more product data as needed
  ]);

  return (
    <ProductContext.Provider value={{ allProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
