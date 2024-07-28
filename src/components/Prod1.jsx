// Prod1.js
import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Grid, Icon } from '@mui/material';
import { CartContext } from './CartContext';
import Footer from './Footer';
import Home from './Home';
import Slideshow from './Slider';

export default function Prod1() {
  const { addToCart, removeFromCart } = useContext(CartContext);

  const cardData = [
    {  title: 'LG 7kg Front load 1200rpm', description: '6 months', price: 7000, image: 'https://p.rmjo.in/productSquare/2n4lkt7c-500x500.webp'},
    { title: 'Leo Reversible Lounger Sofa', description: '1 year', price: 4500, image: 'https://p.rmjo.in/productSquare/v2zmo735-500x500.webp' },
    { title: 'Oven Toaster Griller- 48 L', description: '1 year', price:1500 , image: 'https://core.rentity.in/assets/1_5_37eebcd0-efd2-448a-853a-4c2b689e139f__preview.jpg' },
    { title: 'Brooklyn King Bed', description: 'veg', price:30, image: 'https://p.rmjo.in/productSquare/u353kih8-500x500.webp' },

    { title: 'Double Door Fridge (240 Litre)', description: 'Per month', price:1000, image: 'https://p.rmjo.in/productSquare/00znvje5-500x500.webp' },
    { title: '1.5 Ton 3 Star AC', description: 'Veg', price:90, image: 'https://p.rmjo.in/productSquare/xve5kksr-500x500.webp' },
    { title: 'Front Load Washing Machine', description: 'Veg', price:90, image: 'https://p.rmjo.in/moodShot/25qqgsem-1024x512.webp' },
    { title: 'Titan Pro Gaming Chair', description: 'Non-veg', price:80, image: 'https://p.rmjo.in/moodShot/8gtqmjyy-1024x512.webp' },
    { title: 'Aroura Single Bed Cushion ', description: 'Non-veg', price:100, image: 'https://p.rmjo.in/productSquare/why0zew9-500x500.webp' },
    { title: 'Stowy 2- Door Wardrobe', description: 'Veg', price:20, image: 'https://p.rmjo.in/moodShot/4p5flrv2-1024x512.webp' },
    { title: 'Casper L-Shaped Fabric Sofa ', description: 'Veg', price:10, image: 'https://p.rmjo.in/productSquare/jhsspfzv-500x500.webp' },
    { title: 'Smart LED 43 inch FHD TV', description: 'Veg', price:10, image: 'https://p.rmjo.in/moodShot/fdhrg1b4-1024x512.webp' },
    { title: 'Miller Wood Queen Bed', description: 'veg', price:30, image: 'https://p.rmjo.in/productSquare/hbod06kx-500x500.webp' },
    { title: 'IKEA Poang Rocking Chair', description: 'veg', price:30, image: 'https://p.rmjo.in/productSquare/m8g7vk2n-500x500.webp' },
    { title: 'Marley Queen Bed (6x5)', description: 'veg', price:30, image: 'https://p.rmjo.in/productSquare/3r4rszns-500x500.webp' },
    { title: 'Reversible Lounger Sofa-white', description: 'veg', price:30, image: 'https://plus.unsplash.com/premium_photo-1683141389818-77fd3485334b?q=80&w=1876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

    { title: 'Marvel TV Unit', description: 'veg', price:30, image: 'https://p.rmjo.in/productSquare/khai5gzi-500x500.webp' },
    { title: 'Leonard TV Unit (Walnut)', description: 'veg', price:30, image: 'https://p.rmjo.in/productSquare/ndt903mz-500x500.webp' },
    { title: 'Casper fabric sofa', description: 'veg', price:30, image: 'https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { title: 'Aurora Wooden Queen Bed', description: 'veg', price:30, image: 'https://p.rmjo.in/productSquare/u5j0j47b-500x500.webp' },

    // Add more card data as needed
  ];


  return (
    <div style={{ backgroundColor: '#435585' }}>
      <Home />
      <div>
        <Slideshow />
      </div>
      <center>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <h3 style={{ color: 'white' }}>ELECTRONICS</h3>
        <Grid container spacing={2}>
          {cardData.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 345, backgroundColor: '#F5E8C7' }}>
                <CardMedia sx={{ height: 300 }} image={card.image} title={card.title} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description} - Price: ${card.price}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between' }}>
                  <Button style={{ color: 'orangered' }} onClick={() => addToCart(card)}>
                    <Icon>add_circle</Icon>
                  </Button>
                  <Button style={{ color: 'orangered' }} onClick={() => removeFromCart(card)}>
                    <Icon>remove_circle</Icon>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Footer />
      </center>
    </div>
  );
}
