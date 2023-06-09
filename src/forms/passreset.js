import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Cover from "../images/cover.png"
import Navbar from '../componenets/navbar';
import { useNavigate, Link } from "react-router-dom";


const login = () => {
    const navigate = useNavigate();
    const handleRoute = () => {
      navigate("/home");
    };
    const [buttonText, setButtonText] = useState("Get Code");
    const [showTextField, setShowTextField] = useState(false);

    const handleToggleTextField = () => {
        setShowTextField(true);
        setButtonText("Confirm");

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
                        Forget Password
                    </Typography>
                    <TextField
                        sx={{
                            borderRadius: "10px",
                            mb:"10px"
                        }}
                        type="email"
                        label="Enter email"
                        placeholder="Enter Email"
                        required
                    />
                    {showTextField &&<TextField
                        sx={{
                            borderRadius: "10px",
                            mb:"10px"
                        }}
                        label="Enter code"
                        placeholder="Code"
                        required
                    />}
                    <Button
                    className="btn"
                    type="submit"
                    variant="contained"
                    onClick={handleToggleTextField}
                    sx={{backgroundColor:"secondary.main", mb:"10px",}}>{buttonText}</Button>  
                </Box>
            </form>
        </Box>
    </>
    )
}

export default login;