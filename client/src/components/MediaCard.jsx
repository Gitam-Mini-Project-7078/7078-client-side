import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, Checkbox, Snackbar} from '@mui/material';
import { Bookmark, BookmarkBorder, Share } from '@mui/icons-material';

import { useNavigate } from "react-router-dom";
import copy from 'clipboard-copy'


export default function MediaCard({problem}) {

  const [open, setOpen] = React.useState(null);

  let navigate = useNavigate();
  
  const handleCardClick = () => {
    let path = `/problem/${problem._id}`
    navigate(path);
  };

  const handleButtonClick = (event) => {
    const textToCopy = `localhost:3000/problem/${problem._id}`;
    copy(textToCopy);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Card sx={{maxWidth:300, minWidth:300}} onClick={handleCardClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require('../images/pnb.png')} //doesnt work without 'require'
          alt="problem image"
        />
        <CardContent>
          
          <Typography gutterBottom variant="h5" component="div" noWrap>
            {/* Problem Title */}
            {problem.title}
          </Typography>

          <Box sx={{maxHeight:100, overflowY:'hidden'}}>
            <Typography variant="body2" color="text.secondary" paddingBottom={1}>
              {/* Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica */}
              {problem.shortDescription}
            </Typography>
          </Box>

          <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
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

            <Box id = 'industrySector'>
              {problem.subject}
            </Box>
            
            <Box sx={{display:'none'}} id = 'subjectField'>
              test
            </Box>

            <Box sx={{display:'none'}} id = 'reward'>
              test
            </Box>

            <Checkbox
              id = 'bookmark-button'
              icon={<BookmarkBorder />}
              checkedIcon={<Bookmark />}
              onTouchStart={(event) => event.stopPropagation()} //for mobile
              onMouseDown={event => event.stopPropagation()} //for PC
              onClick={event => {
                event.stopPropagation();
                console.log("Bookmark Button clicked");
              }}
            />

            <Snackbar
              open={open}
              autoHideDuration={400}
              onClose={handleClose}
              message="Link Copied"
            />

          </Box>

        </CardContent>
      </CardActionArea>
    </Card>
  );
}