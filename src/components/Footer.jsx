import { Button, Grid, Link } from '@mui/material';
import React from 'react';
import { Instagram, Twitter, Facebook } from '@mui/icons-material';

const Footer = () => {
  const columnStyle = {
    display: 'flex',
    flexDirection: 'row',
  };

  const paperStyle = {
    flex: 1,
    borderRight: '1px solid #ccc',
    padding: '20px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const lastPaperStyle = {
    ...paperStyle,
    borderRight: 'none',
  };

  const listStyle = {
    listStyleType: 'none', 
    padding: 0, 
    textAlign: 'left',
    marginTop: '10px',
  };

  const listItemStyle = {
    marginBottom: '8px', 
  };

  return (
    <div style={{backgroundColor:'#000'}}>
      <hr></hr>
    <div style={columnStyle}>
      <div style={paperStyle}>
        <h2 style={{color:'white'}}>ABOUT US</h2>
        <ul style={listStyle}>
          <li style={listItemStyle}><Link style={{color:'white'}}>
            Who We Are
          </Link>
            </li>
          <li style={listItemStyle}><Link style={{color:'white'}}>Blog</Link></li>
          <li style={listItemStyle}><Link style={{color:'white'}}>Work With Us</Link></li>
          <li style={listItemStyle}><Link style={{color:'white'}}>Investor Relations</Link></li>
          <li style={listItemStyle}><Link style={{color:'white'}}>Report Fraud</Link></li>
          <li style={listItemStyle}><Link style={{color:'white'}}>Press Kit</Link></li>
          <li style={listItemStyle}><Link style={{color:'white'}}>Contact Us</Link></li>
        </ul>
      </div>
      <div style={paperStyle}>
        <h2 style={{color:'white'}}>LE'VERSE</h2>
        <ul style={listStyle}>
        <li style={listItemStyle}><Link style={{color:'white'}}>Rento</Link></li>
          <li style={listItemStyle}><Link style={{color:'white'}}>Rentity</Link></li>
          <li style={listItemStyle}><Link style={{color:'white'}}>Rental India</Link></li>
          <li style={listItemStyle}><Link style={{color:'white'}}>Hypergood</Link></li>
          <li style={listItemStyle}><Link style={{color:'white'}}>Rent Hub</Link></li>
        </ul>
      </div>
      <div style={lastPaperStyle}>
        <h2 style={{color:'white'}}>FOR FRANCHISE</h2>
        <ul style={listStyle}>
        <li style={listItemStyle}><Link style={{color:'white'}}>Partner With Us</Link></li>
          <li style={listItemStyle}><Link style={{color:'white'}}>Apps For You</Link></li>
          
        </ul>
        <h2 style={{color:'white'}}>FOR ENTERPRISES</h2>
        <ul style={listStyle}>
          
          <li style={listItemStyle}><Link style={{color:'white'}}>LeaseEaze For Enterprise</Link></li>
        </ul>
      </div>
      <hr></hr>
      <div style={paperStyle}>
        <h2 style={{color:'white'}}>LEARN MORE</h2>
        <ul style={listStyle}>
        <li style={listItemStyle}><Link style={{color:'white'}}>Privacy</Link></li>
          <li style={listItemStyle}><Link style={{color:'white'}}>Security</Link></li>
          <li style={listItemStyle}><Link style={{color:'white'}}>Terms</Link></li>
          <li style={listItemStyle}><Link style={{color:'white'}}>Sitemap</Link></li>
        </ul>
      </div>
    <div style={{textAlign:'justify'}}>
      <Grid display={'flex'} style={{flexDirection:'column', margin:'50px'}}>
        <h1 style={{color:'white'}}>SocialMedia</h1>
      <Button>
    <Facebook/>Facebook
      </Button>
      <Button>
      <Twitter/>Twitter
      </Button>
      <Button>
      <Instagram/>Instagram
      </Button>

      </Grid>
    </div>
    </div>
    </div>

  );
};

export default Footer;
