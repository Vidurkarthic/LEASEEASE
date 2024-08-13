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


export default function Prod4() {
  const { addToCart, removeFromCart, cart, calculateTotal } = useContext(CartContext);

  const cardData = [
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
