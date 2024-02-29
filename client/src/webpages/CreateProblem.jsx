import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CreateIcon from '@mui/icons-material/Create';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { InputAdornment, Autocomplete, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, styled} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const CreateProblem = () => {

    const subjectsList = ['Computer Science', 'Electrical Engineering', 'Civil Engineering', 'Medicine', 'Biology', 'Botany', 'Psychology', 'Social Sciences', 'Pharma','Economics'];

    const [title, setTitle] = useState('');
    const [closeDate, setcloseDate] = useState('');
    const [reward, setReward] = useState('');
    const [shortDescription, setshortDescription] = useState('');
    const [subject, setSubject] = useState(null);
    const [isGov, setisGov] = useState(false);
    const [thumbnail, setThumbnail] = useState('');
    const [detailedDescription, setdetailedDescription] = useState('');
    const [inputValue, setInputValue] = useState("");

    const navigate = useNavigate();

    const handleSave = () => {
        const data = {
            title, closeDate, reward, shortDescription, subject, isGov, detailedDescription
        };
        
        axios
        .post('http://localhost:7078/problems', data)
        .then(() => {    
            console.log("Form submitted successfully");
            navigate('/');
        })
        .catch((error) => {
            console.log("Error submitting form:", error);
        });
    };

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)', clipPath: 'inset(50%)', height: 1, overflow: 'hidden', position: 'absolute', bottom: 0, left: 0, whiteSpace: 'nowrap', width: 1,
    });

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Box sx={{display: 'flex', flexDirection: 'justify-between'}} alignItems={'center'}>
                <Typography component="h1" variant="h5">
                    Create Problem
                </Typography>
                <Avatar sx={{ m: 1, bgcolor: 'primary.main', width: 27, height: 27 }}>
                    <CreateIcon sx={{width: 20, height: 20}}/>
                </Avatar>
            </Box>
            <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>

                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="title"
                    label="Problem Title"
                    autoFocus
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    required
                    fullWidth
                    id="closeDate"
                    label="Closing Date"
                    placeholder='yyyy-mm-dd'
                    value={closeDate}
                    onChange={(e) => setcloseDate(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Reward Amount"
                        id="reward"
                        InputProps={{
                        startAdornment: <InputAdornment position="start">Rs.</InputAdornment>,
                        }}
                        value={reward}
                        onChange={(e) => setReward(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="shortDescription"
                        label="Short Description"
                        fullWidth
                        multiline
                        required
                        maxRows={4}
                        value={shortDescription}
                        onChange={(e) => setshortDescription(e.target.value)}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Autocomplete
                        disablePortal
                        id="subject"
                        options={subjectsList}
                        fullWidth
                        value={subject}
                        onChange={(event, newValue) => {
                            setSubject(newValue);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                            setInputValue(newInputValue);
                        }}
                        renderInput={(params) => <TextField {...params} label="Field of Study" required />}
                    />
                </Grid>
                
                <Grid item xs={12}>
                    <FormControl>
                        <FormLabel>Industry Sector</FormLabel>
                        <RadioGroup 
                            row
                            value={isGov}
                            onChange={(e) => setisGov(e.target.value)}
                        >
                            <FormControlLabel value={false} control={<Radio />} label="Private Sector" />
                            <FormControlLabel value={true} control={<Radio />} label="Government Sector" />
                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <Box sx={{display: 'flex', }}>
                    <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}  size='small' >
                        Upload Thumbnail Image
                        {/* <VisuallyHiddenInput type="file" /> */}
                    </Button>
                    </Box>                
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        id="detailedDescription"
                        label="Detailed Description"
                        fullWidth
                        multiline
                        rows={4}
                        value={detailedDescription}
                        onChange={(e) => setdetailedDescription(e.target.value)}
                    />
                </Grid>

                </Grid>
                <Button
                    // type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleSave}  
                >
                Save
                </Button>
            </Box>
            </Box>
        </Container>
    );
}

export default CreateProblem