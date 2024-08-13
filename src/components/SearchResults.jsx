import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { ProductContext } from './ProductContext';
import Home from './Home';
import Footer from './Footer';

const SearchResults = () => {
  const { state } = useLocation();
  const { query } = state;
  const { allProducts } = useContext(ProductContext);

  const filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className='outer' style={{backgroundColor:'#747474'}}>
        <Home></Home>
    <div style={{ padding: '20px' }}>
      <h2 style={{color:'white'}}>Search Results for: {query}</h2>
      <Grid container spacing={2}>
        {filteredProducts.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia
                component="img"
                alt={product.title}
                height="140"
                image={product.image}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: ${product.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default SearchResults;
