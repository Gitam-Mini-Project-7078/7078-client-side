import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, Snackbar} from '@mui/material';
import { Share } from '@mui/icons-material';

import { useNavigate } from "react-router-dom";


export default function MediaCard() {

  const [open, setOpen] = React.useState(null);

  let navigate = useNavigate();
  const handleCardClick = () => {
    let path = '/problem'
    navigate(path);
  };

  const handleButtonClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Card sx={{maxWidth:345, minWidth:200}} onClick={handleCardClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require('../images/pnb.png')} //doesnt work without 'require'
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" noWrap>
            Lizard
          </Typography>
          <Box sx={{maxHeight:100, overflowY:'hidden'}}>
            <Typography variant="body2" color="text.secondary" paddingBottom={1}>
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </Box>
          <div>
            <Button
              size="small"
              color="primary"
              startIcon={<Share/>}
              onTouchStart={(event) => event.stopPropagation()} //for mobile
              onMouseDown={event => event.stopPropagation()} //for PC
              onClick={event => {
                event.stopPropagation();
                event.preventDefault();
                handleButtonClick();
                console.log("Share Button clicked");
              }}
              // onClick={handleButtonClick} -- Not under use. Look 3 lines above. 

            >
              Share
            </Button>

            <Snackbar
              open={open}
              autoHideDuration={400}
              onClose={handleClose}
              message="Link Copied"
            />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}