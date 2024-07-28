// Prod2.js
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

export default function Prod2() {
  const { addToCart, removeFromCart, cart, calculateTotal } = useContext(CartContext);

  const cardData = [
    { title: 'Leo Reversible Lounger Sofa', description: '1 year', price: 4500, image: 'https://p.rmjo.in/productSquare/v2zmo735-500x500.webp' },
    { title: 'Brooklyn King Bed (72*78 inch)', description: 'King size bed', price: 3000, image: 'https://p.rmjo.in/productSquare/u353kih8-500x500.webp' },
    { title: 'Titan Pro Gaming Chair', description: 'Ergonomic gaming chair', price: 800, image: 'https://p.rmjo.in/moodShot/8gtqmjyy-1024x512.webp' },
    { title: 'Aurora Single Bed Cushion', description: 'Comfortable single bed', price: 1000, image: 'https://p.rmjo.in/productSquare/why0zew9-500x500.webp' },
    { title: 'Stowy 2-Door Wardrobe', description: 'Spacious wardrobe', price: 2000, image: 'https://p.rmjo.in/moodShot/4p5flrv2-1024x512.webp' },
    { title: 'Casper L-Shaped Fabric Sofa', description: 'L-shaped sofa', price: 4000, image: 'https://p.rmjo.in/productSquare/jhsspfzv-500x500.webp' },
    { title: 'Miller Wood Queen Bed', description: 'Queen size bed', price: 3500, image: 'https://p.rmjo.in/productSquare/hbod06kx-500x500.webp' },
    { title: 'IKEA Poang Rocking Chair', description: 'Comfortable rocking chair', price: 1000, image: 'https://p.rmjo.in/productSquare/m8g7vk2n-500x500.webp' },
    { title: 'Marley Queen Bed (6x5)', description: 'Queen size bed', price: 3000, image: 'https://p.rmjo.in/productSquare/3r4rszns-500x500.webp' },
    { title: 'Reversible Lounger Sofa - White', description: 'White lounger sofa', price: 4500, image: 'https://plus.unsplash.com/premium_photo-1683141389818-77fd3485334b?q=80&w=1876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Casper Fabric Sofa', description: 'Comfortable fabric sofa', price: 3000, image: 'https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { title: 'Aurora Wooden Queen Bed', description: 'Wooden queen bed', price: 3500, image: 'https://p.rmjo.in/productSquare/u5j0j47b-500x500.webp' },
    // Add more card data as needed
  ];

  return (
    <div style={{ backgroundColor: "#435585" }}>
      <Home />
      <div>
        <Slideshow />
      </div>
      <center>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <h3 style={{ color: "white" }}>FURNITURES</h3>
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
