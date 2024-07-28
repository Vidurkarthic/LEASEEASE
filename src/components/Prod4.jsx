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

export default function Prod4() {
  const { addToCart, removeFromCart, cart, calculateTotal } = useContext(CartContext);

  const cardData = [
    { title: 'Chicken Biriyani', description: 'Non-veg', price: 130, image: 'https://images.unsplash.com/photo-1695822822491-d92cee704368?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Chicken Noodles', description: 'Non-veg', price: 120, image: 'https://images.unsplash.com/photo-1695048132783-4b9f77bde5be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGlwaG9uZSUyMDE1fGVufDB8fDB8fHww' },
    { title: 'Chicken Rice', description: 'Non-veg', price: 120, image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Chicken Chilli', description: 'Non-veg', price:50, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Paneer Rice', description: 'Veg', price:90, image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { title: 'Vegetable Biriyani', description: 'Veg', price:90, image: 'https://images.unsplash.com/photo-1644659306528-259903deccde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fG1hY2Jvb2t8ZW58MHx8MHx8fDA%3D' },
    { title: 'Chicken Gravy', description: 'Non-veg', price:80, image: 'https://images.unsplash.com/photo-1673718424091-5fb734062c05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFuZHJvaWQlMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D' },
    { title: 'Mutton Gravy', description: 'Non-veg', price:100, image: 'https://images.unsplash.com/photo-1647880087577-92da45fea280?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Parotta', description: 'Veg', price:20, image: 'https://www.thisday.app/uploads/Malabar_Parotta_9d1c0ff00b.png' },
    { title: 'Dosa', description: 'Veg', price:10, image: 'https://images.unsplash.com/photo-1647880087577-92da45fea280?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Idli', description: 'Veg', price:10, image: 'https://images.healthshots.com/healthshots/en/uploads/2022/09/30115812/idli.jpg' },
    { title: 'Payasam', description: 'Veg', price:30, image: 'https://www.milkmaid.in/sites/default/files/2020-06/Semiyan-Payasam-590x436.jpg' },
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
        <h3 style={{ color: "white" }}>FOOD ITEMS</h3>
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
          <h4>Shopping Cart</h4>
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
