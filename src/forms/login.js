import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import Cover from "../images/cover.png"
import Navbar from '../componenets/navbar';
import { useNavigate, Link } from "react-router-dom";


const login = () => {
    const navigate = useNavigate();
    const handleRoute = () => {
      navigate("/home");
    };


    return (<>

        <Navbar/>
        <Box
         sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            backgroundImage:`url(${Cover})`,
            backgroundSize:"contain", 
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
                    backgroundColor:"transp.main",
                    opacity:"95%"
                }}>
                    <Typography sx={{
                        mb:"10px"
                    }}>
                        MOVIE SCAPE
                    </Typography>
                    <TextField
                        sx={{
                            borderRadius: "10px",
                            mb:"10px"
                        }}
                        type="email"
                        label="email"
                        placeholder="Email"
                        required
                    />
                    <TextField
                        sx={{
                            borderRadius: "10px",
                            mb:"10px"
                        }}
                        type="password"
                        label="password"
                        placeholder="Password"
                        required
                    />
                    <Typography
                    variant="h1"
                    sx={{
                        textDecoration:"underline",
                        mb:"10px",
                        textAlign:"right",
                        color:"secondary.main",
                        cursor:"pointer",
                    }}
                    component={Link} to="/passreset"
                    >
                        FORGET PASSWORD?
                    </Typography>
                    <Button
                    type="submit"
                    variant="contained"
                    sx={{backgroundColor:"secondary.main", mb:"10px",}}>Login</Button>  
                    <Button
                    variant="contained"
                    component={Link} to="/signup"
                    sx={{backgroundColor:"secondary.main"}}>Sign Up</Button>
                </Box>
            </form>
        </Box>
    </>
    )
}

export default login;