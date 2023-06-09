import { Box, Button, TextField, Typography, Grid, FormLabel, RadioGroup, FormControlLabel } from "@mui/material";
import React from "react";
import Cover from "../images/cover.png"
import { Radio } from "@mui/material";
import Navbar from '../componenets/navbar';
import { useNavigate, Link } from "react-router-dom";
// import { DatePicker, LocalizationProvider, AdapterDayjs } from "@mui/x-date-pickers";
// import dayjs from "dayjs";
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';


const signup = () => {
    const navigate = useNavigate();
    const handleRoute = () => {
      navigate("/");
    };
    return (<>

        <Navbar/>
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                backgroundImage: `url(${Cover})`,
                backgroundSize: "contain",
                p: "30px",
            }}>
             <form onSubmit={() => handleRoute()}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    mx: "auto",
                    textAlign: "center",
                    p: "20px",
                    borderRadius: "20px",
                    flexDirection: "column",
                    backgroundColor: "transp.main",
                    opacity: "90%"
                }}>
                    <Typography sx={{
                        mb: "10px"
                    }}>
                        MOVIE SCAPE
                    </Typography>
                    
                    <Grid >

                        <TextField
                            sx={{
                                borderRadius: "10px",
                                mb: "10px",
                                mr: "5px",
                            }}
                            item xs="3"
                            type="name"
                            label="First Name"
                            placeholder="First Name"
                            required
                        />
                        <TextField
                            sx={{
                                borderRadius: "10px",
                                mb: "10px"
                            }}
                            item xs="3"
                            type="name"
                            label="Second Name"
                            placeholder="Second Name"
                            required
                        />
                    </Grid>
                    <TextField
                        sx={{
                            borderRadius: "10px",
                            mb: "10px"
                        }}
                        type="email"
                        label="email"
                        placeholder="Email"
                        required
                    />

                    <Grid container >

                    <TextField
                        sx={{
                            borderRadius: "10px",
                            mb: "10px"
                        }}
                        xs="5"
                        type="password"
                        label="password"
                        placeholder="Password"
                        required
                        />
                    <TextField
                        sx={{
                            borderRadius: "10px",
                            mb: "10px",
                            ml:"5px"
                        }}
                        xs="5"
                        type="password"
                        label="confirm password"
                        placeholder="Confirm Password"
                        required
                        />
                    </Grid>

                    <label htmlFor="upload-photo">
                        <input
                            style={{ display: 'none' }}
                            id="upload-photo"
                            name="upload-photo"
                            type="file"
                        />

                        <Button color="secondary" variant="contained" component="span">
                            Add Profile Picture
                        </Button>
                    </label>

                
                    {/*                     
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer
                            components={[
                                'DatePicker',

                            ]}
                        >

                            <DemoItem label="Responsive variant">
                                <DatePicker defaultValue={dayjs('2022-04-17')} />
                            </DemoItem>

                        </DemoContainer>
                    </LocalizationProvider> */}

                    <FormLabel id="gender" sx={{ textAlign: "left" }}>Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="Other" control={<Radio />} label="Flying Saucer" />
                    </RadioGroup>

                    <Typography
                        variant="h1"
                        sx={{
                            textDecoration: "underline",
                            mb: "10px",
                            textAlign: "right",
                            color: "secondary.main",
                            cursor: "pointer",
                        }}
                        component={Link} to="/"
                    >
                        Already have account? Login now
                    </Typography>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ backgroundColor: "secondary.main" }}>Sign up</Button>
                </Box>
            </form>
        </Box>
    </>
    )
}

export default signup;