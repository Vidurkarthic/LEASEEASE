// Prod3.js
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

export default function Prod3() {
  const { addToCart, removeFromCart, cart, calculateTotal } = useContext(CartContext);

  const cardData = [
    { title: 'LG 7kg Front load 1200rpm', description: '6 months', price: 7000, image: 'https://p.rmjo.in/productSquare/2n4lkt7c-500x500.webp' },
    { title: 'Oven Toaster Griller- 48 L', description: '1 year', price: 1500, image: 'https://core.rentity.in/assets/1_5_37eebcd0-efd2-448a-853a-4c2b689e139f__preview.jpg' },
    { title: 'Double Door Fridge (240 L)', description: 'Per month', price: 1000, image: 'https://p.rmjo.in/productSquare/00znvje5-500x500.webp' },
    { title: '1.5 Ton 3 Star AC', description: 'AC unit', price: 9000, image: 'https://p.rmjo.in/productSquare/xve5kksr-500x500.webp' },
    { title: 'FIBER Washing Machine', description: 'Washing machine', price: 9000, image: 'https://p.rmjo.in/moodShot/25qqgsem-1024x512.webp' },
    { title: 'Smart LED 43 inch FHD TV', description: 'LED TV', price: 10000, image: 'https://p.rmjo.in/moodShot/fdhrg1b4-1024x512.webp' },
    { title: 'Marvel TV Unit', description: 'TV unit', price: 3000, image: 'https://p.rmjo.in/productSquare/khai5gzi-500x500.webp' },
    { title: 'Leonard TV Unit (Walnut)', description: 'TV unit', price: 3000, image: 'https://p.rmjo.in/productSquare/ndt903mz-500x500.webp' },
  ];

  return (
    <div style={{ backgroundColor: '#323232'}}>
      <Home />
      <div>
        <Slideshow />
      </div>
      <center style={{padding:'20px'}}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <h3 style={{ color: 'white', margin: '20px 0' }}>HOME ESSENTIALS</h3>
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