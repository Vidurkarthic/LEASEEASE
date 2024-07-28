import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div sx={{bgcolor:'#F5E8C7'}}>
      <Link to={'/abc'}>
      <motion.div style={{backgroundColor:'inherit'}}>
      <motion.button whileHover={{scale:'1.1'}} style={{backgroundColor:'inherit',borderColor:'transparent'}}>
    <Card sx={{ maxWidth: 345 , bgcolor:'#F5E8C7'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="SS HYDERABAD BIRIYANI"
        subheader="Gandhipuram,Coimbatore"
        />
      <CardMedia
        component="img"
        height="194"
        image="https://wallpaperaccess.com/full/1972917.jpg"
        alt="Paella dish"
        />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Biryani, Chinese, Mughlai, North Indian, Seafood
        Open -11am(Everyday) 
        Closes -11pm(Everyday)
        Authentic South Biriyani
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>POPULAR DISHES:</Typography>
          <Typography paragraph>
          Hyderabadi Chicken Biryani<br></br>
Hyderabadi Mutton Biryani<br></br>
Hyderabadi Veg Biryani<br></br>
Hyderabadi Dum Biryani<br></br>
Hyderabadi Chicken Dum Biryani<br></br>
Hyderabadi Mutton Dum Biryani<br></br>
Hyderabadi Veg Dum Biryani<br></br>
Chicken 65 Biryani<br></br>
Mutton Kheema Biryani<br></br>
Egg Biryani<br></br>
Shrimp Biryani<br></br>
Hyderabadi Chicken Fry Biryani<br></br>
Paneer Biryani<br></br>
Vegetable Biryani<br></br>
<br></br>

PEOPLE SAY THIS PLACE IS KNOWN FOR:<br></br>
Good Value, Good Quantity, Good Delivery, Excellent Taste, Quick Delivery, Cutlery
<br></br>
<br></br>
AVERAGE COST:<br></br>
₹500 for two people (approx.)
          </Typography>
          <Typography paragraph>
          CALL:<br></br>
+917407712345<br></br>

+917407212345<br></br>

+917407312345<br></br>
          </Typography>
          <Typography paragraph>
            
          </Typography>
          <Typography>
          New VS Towers 51, 11th Street, Cross Cut Road, Gandhipuram, Coimbatore
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
        </motion.button>
      </motion.div>
          </Link>
    </div>
  );
}
