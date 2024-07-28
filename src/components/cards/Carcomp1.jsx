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

export default function RecipeReviewCard1() {
  const [xpanded, setxpanded] = React.useState(false);

  const handlxpandCick = () => {
    setxpanded(!xpanded);
  };

  return (
    <Link to={'/abc1'}>
    <motion.div style={{backgroundColor:'inherit'}}>
      <motion.button whileHover={{scale:'1.1'}} style={{backgroundColor:'inherit',borderColor:'transparent'}}>

    <Card sx={{ maxWidth: 345 ,bgcolor:'#F5E8C7'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'skyblue' }} aria-label="recipe">
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="007 PUNJABI DHABA"
        subheader="Kovaipudur,Coimbatore"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://lakegenevacountrymeats.com/wp-content/uploads/Grilling-Chicken-Breast-1.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        North Indian, South Indian, Shawarma, Chinese, Beverages
        <br></br>
      
        Open -11am(Everyday) Closes -11pm(Everyday)
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={xpanded}
          onClick={handlxpandCick}
          aria-expanded={xpanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={xpanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>POPULAR DISHES:</Typography>
          <Typography paragraph>
            
          </Typography>
          <Typography paragraph>
          Dal Tadka<br></br>
          
Paneer Butter Masala<br></br>
Butter Chicken<br></br>
Naan<br></br>
Roti/Chapati<br></br>
Tandoori Roti<br></br>
Aloo Paratha<br></br>
Chicken Curry<br></br>
Mutton Curry<br></br>
Biryani<br></br>
          </Typography>
          <Typography paragraph>
          PEOPLE SAY THIS PLACE IS KNOWN FOR:<br></br>
Cozy Ambiance, Unlimited Refills, Lip Smacking Food, Pocket Friendly, Comfort Food, Prompt Service
          </Typography>
          <Typography>
          AVERAGE COST:<br></br>
₹1,000 for two people (approx.)<br></br><br></br>
CALL:<br></br>
+919364525515<br></br>
<br>
</br>
Near, Pirivu, Palakkad Main Rd, BK Pudur, Kovaipudur, Tamil Nadu 641018
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
      </motion.button>
    </motion.div>
    </Link>
  );
}
