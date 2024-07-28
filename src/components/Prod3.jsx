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

export default function Prod3() {
  const { addToCart, removeFromCart, cart, calculateTotal } = useContext(CartContext);

  const cardData = [
    { title: 'LG 7kg Front load 1200rpm', description: '6 months', price: 7000, image: 'https://p.rmjo.in/productSquare/2n4lkt7c-500x500.webp' },
    { title: 'Oven Toaster Griller- 48 L', description: '1 year', price: 1500, image: 'https://core.rentity.in/assets/1_5_37eebcd0-efd2-448a-853a-4c2b689e139f__preview.jpg' },
    { title: 'Double Door Fridge (240 Litre)', description: 'Per month', price: 1000, image: 'https://p.rmjo.in/productSquare/00znvje5-500x500.webp' },
    { title: '1.5 Ton 3 Star AC', description: 'AC unit', price: 9000, image: 'https://p.rmjo.in/productSquare/xve5kksr-500x500.webp' },
    { title: 'Front Load Washing Machine', description: 'Washing machine', price: 9000, image: 'https://p.rmjo.in/moodShot/25qqgsem-1024x512.webp' },
    { title: 'Smart LED 43 inch FHD TV', description: 'LED TV', price: 10000, image: 'https://p.rmjo.in/moodShot/fdhrg1b4-1024x512.webp' },
    { title: 'Marvel TV Unit', description: 'TV unit', price: 3000, image: 'https://p.rmjo.in/productSquare/khai5gzi-500x500.webp' },
    { title: 'Leonard TV Unit (Walnut)', description: 'TV unit', price: 3000, image: 'https://p.rmjo.in/productSquare/ndt903mz-500x500.webp' },
  ];

  return (
    <div style={{ backgroundColor: "#435585" }}>
      <Home />
      <div>
        <Slideshow />
      </div>
      <center>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <h3 style={{ color: "white" }}>HOME APPLIANCES</h3>
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
                  <Button style={{ color: "orangered" }} onClick={() => addToCart(card)}>
                    <Icon>add_circle</Icon>
                  </Button>
                  <Button style={{ color: "orangered" }} onClick={() => removeFromCart(card)}>
                    <Icon>remove_circle</Icon>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Display Cart Items */}
        <div style={{ marginTop: '20px' }}>
          <h4 style={{ color: '#FF0000' }}>Shopping Cart</h4>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.title} - ${item.price} x {item.qty}
              </li>
            ))}
          </ul>
          <h4>Total: ${calculateTotal()}</h4>
        </div>

        <Footer />
      </center>
    </div>
  );
}
