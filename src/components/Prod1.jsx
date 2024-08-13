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

const cardStyles = {
  card: {
    maxWidth: 345,
    backgroundColor: '#f5f5f5',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  media: {
    height: 300,
  },
  content: {
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  actions: {
    justifyContent: 'space-between',
    padding: '0 16px 8px 16px',
  },
  button: {
    color: 'orangered',
    '&:hover': {
      color: 'darkred',
    },
  },
};

export default function Prod1() {
  const { addToCart, removeFromCart } = useContext(CartContext);

  const cardData = [
    {  title: 'Sony Bravia (75 inch)', description: '6 months', price: 700, image: 'https://p.rmjo.in/productSquare/2n4lkt7c-500x500.webp'},
    { title: 'Leo Reversible Sofa', description: '1 year', price: 450, image: 'https://p.rmjo.in/productSquare/v2zmo735-500x500.webp' },
    { title: 'Oven Toaster Griller- 48 L', description: '1 year', price:150 , image: 'https://core.rentity.in/assets/1_5_37eebcd0-efd2-448a-853a-4c2b689e139f__preview.jpg' },
    { title: 'Brooklyn King Bed', description: 'veg', price:30, image: 'https://p.rmjo.in/productSquare/u353kih8-500x500.webp' },

    { title: 'Double Door Fridge', description: 'Per month', price:100, image: 'https://p.rmjo.in/productSquare/00znvje5-500x500.webp' },
    { title: '1.5 Ton 3 Star AC', description: '6 months', price:90, image: 'https://p.rmjo.in/productSquare/xve5kksr-500x500.webp' },
    { title: 'Samsung Washing Machine', description: '1 year', price:90, image: 'https://p.rmjo.in/moodShot/25qqgsem-1024x512.webp' },
    { title: 'Titan Pro Gaming Chair', description: '3 years', price:800, image: 'https://p.rmjo.in/moodShot/8gtqmjyy-1024x512.webp' },
    { title: 'Aroura Single Bed Cushion ', description: '5 years', price:1000, image: 'https://p.rmjo.in/productSquare/why0zew9-500x500.webp' },
    { title: 'Stowy 2- Door Wardrobe', description: '5 years', price:200, image: 'https://p.rmjo.in/moodShot/4p5flrv2-1024x512.webp' },
    { title: 'Casper Fabric Sofa ', description: '5 years', price:100, image: 'https://p.rmjo.in/productSquare/jhsspfzv-500x500.webp' },
    { title: 'Smart LED 43 inch FHD TV', description: '2 years', price:100, image: 'https://p.rmjo.in/moodShot/fdhrg1b4-1024x512.webp' },
    { title: 'Miller Wood Queen Bed', description: '5 years', price:3000, image: 'https://p.rmjo.in/productSquare/hbod06kx-500x500.webp' },
    { title: 'IKEA Poang Rocking Chair', description: 'Per month', price:340, image: 'https://p.rmjo.in/productSquare/m8g7vk2n-500x500.webp' },
    { title: 'Marley Queen Bed (6x5)', description: '5 months', price:300, image: 'https://p.rmjo.in/productSquare/3r4rszns-500x500.webp' },
    { title: 'Reversible Lounger Sofa', description: '5 years', price:300, image: 'https://plus.unsplash.com/premium_photo-1683141389818-77fd3485334b?q=80&w=1876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

    { title: 'Marvel TV Unit', description: '5 years', price:300, image: 'https://p.rmjo.in/productSquare/khai5gzi-500x500.webp' },
    { title: 'Leonard TV Unit (Walnut)', description: '4years', price:300, image: 'https://p.rmjo.in/productSquare/ndt903mz-500x500.webp' },
    { title: 'Casper fabric sofa', description: '5 years', price:300, image: 'https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { title: 'Aurora Wooden Queen Bed', description: '5 years', price:300, image: 'https://p.rmjo.in/productSquare/u5j0j47b-500x500.webp' },

    // Add more card data as needed
  ];


  return (
    <div style={{ backgroundColor: '#323232'}}>
      <Home />
      <div>
        <Slideshow />
      </div>
      <center style={{padding:'20px'}}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <h3 style={{ color: 'white', margin: '20px 0' }}>ELECTRONICS</h3>
        <Grid container spacing={3}>
          {cardData.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Card sx={cardStyles.card}>
                <CardMedia sx={cardStyles.media} image={card.image} title={card.title} />
                <CardContent sx={cardStyles.content}>
                  <Typography gutterBottom variant="h5" component="div" sx={cardStyles.title}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description} - Price: ${card.price}
                  </Typography>
                </CardContent>
                <CardActions sx={cardStyles.actions}>
                  <Button sx={cardStyles.button} onClick={() => addToCart(card)}>
                    <Icon>add_circle</Icon>
                  </Button>
                  <Button sx={cardStyles.button} onClick={() => removeFromCart(card)}>
                    <Icon>remove_circle</Icon>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </center>
        <Footer />
    </div>
  );
}