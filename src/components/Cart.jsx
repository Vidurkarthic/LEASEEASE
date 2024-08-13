import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Card, CardContent, Typography, IconButton, Button, Grid, CardMedia, Box, Container } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Slider from 'react-slick';
import Home from './Home';
import Footer from './Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cart = () => {
  const { cart, calculateTotal, addToCart, removeFromCart } = useContext(CartContext);
  const discountRate = 0.10;
  const totalAmount = calculateTotal();
  const discountAmount = totalAmount * discountRate;
  const finalAmount = totalAmount - discountAmount;

  const recommendedProducts = [
    { title: 'Sony Woofer', price: 99.99, image: 'https://t3.ftcdn.net/jpg/05/73/85/50/360_F_573855027_2Brs00J529282uhCAor3N46zvkx9Yba3.jpg' },
    { title: 'Product 2', price: 199.99, image: 'https://p.rmjo.in/productSquare/ndt903mz-500x500.webp' },
    { title: 'Product 3', price: 299.99, image: 'https://p.rmjo.in/moodShot/8gtqmjyy-1024x512.webp' },
    { title: 'Product 4', price: 399.99, image: 'https://p.rmjo.in/productSquare/u5j0j47b-500x500.webp' },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const handlePayment = () => {
    const options = {
      key: "OiU6n7RR0JZWnG", // Replace with your Razorpay key
      amount: finalAmount * 100, // Convert to paisa
      currency: "INR",
      name: "STARTUP_PROJECTS",
      description: "Test Transaction",
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        // Add your post-payment logic here, like updating the order status in your database
      },
      prefill: {
        name: "VIDUR", // Replace with the actual user's name
        email: "karthicvidur@gmail.com", // Replace with the actual user's email
        contact: "8610209063" // Replace with the actual user's contact number
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#3399cc"
      }
    };
    
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div style={{ backgroundImage: 'url("https://wallpapers.com/images/hd/grey-texture-background-w1l3gawh0u1hnnei.jpg")', backgroundSize: 'contain', minHeight: '100vh' }}>
      <Home />
      <Container>
        <div style={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '10px' }}>
          <Typography variant="h3" gutterBottom style={{ color: '#333', textAlign: 'center' }}>Shopping Cart</Typography>
          <Grid container spacing={3}>
            {cart.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card style={{ backgroundColor: '#fff', padding: '10px' }}>
                  <CardMedia
                    component="img"
                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                    image={item.image}
                    alt={item.title}
                  />
                  <CardContent style={{ textAlign: 'center' }}>
                    <Typography variant="h6" style={{ marginBottom: '10px' }}>{item.title}</Typography>
                    <Typography variant="body1" style={{ marginBottom: '10px' }}>${item.price} x {item.qty}</Typography>
                    <Box>
                      <IconButton onClick={() => addToCart(item)} color="primary">
                        <AddCircleIcon />
                      </IconButton>
                      <IconButton onClick={() => removeFromCart(item)} color="secondary">
                        <RemoveCircleIcon />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box style={{ marginTop: '40px' }}>
            <Typography variant="h4" style={{ color: '#333' }}>Recommended Products</Typography>
            <Slider {...sliderSettings}>
              {recommendedProducts.map((product, index) => (
                <Card key={index} style={{ padding: '10px', backgroundColor: '#fff', margin: '10px' }}>
                  <CardMedia
                    component="img"
                    style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                    image={product.image}
                    alt={product.title}
                  />
                  <CardContent style={{ textAlign: 'center' }}>
                    <Typography variant="h6">{product.title}</Typography>
                    <Typography variant="body1">${product.price}</Typography>
                  </CardContent>
                </Card>
              ))}
            </Slider>
          </Box>
          <Card style={{ marginTop: '20px', backgroundColor: '#fff', padding: '20px' }}>
            <Typography variant="h5" gutterBottom style={{ color: '#333' }}>Order Summary</Typography>
            <Typography variant="body1" style={{ color: '#333' }}>Total Amount: ${totalAmount.toFixed(2)}</Typography>
            <Typography variant="body1" style={{ color: '#333' }}>Delivery Charges: Free</Typography>
            <Typography variant="body1" style={{ color: '#333' }}>Discount (10%): -${discountAmount.toFixed(2)}</Typography>
            <Typography variant="h6" style={{ color: '#333', marginTop: '10px' }}>Final Amount: ${finalAmount.toFixed(2)}</Typography>
            <Typography variant="body2" style={{ color: '#333', marginTop: '5px' }}>You saved: ${discountAmount.toFixed(2)}</Typography>
            <Button 
              variant="contained" 
              color="primary" 
              style={{ marginTop: '20px' }} 
              onClick={handlePayment} // Trigger Razorpay on click
            >
              Proceed to Checkout
            </Button>
          </Card>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Cart;
