import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import Cover from "../images/cover.png"

const login = () => {
    return (<>
        <Box
         sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            backgroundImage:`url(${Cover})`,
            backgroundSize:"contain", 
          }}>
            <form>
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
                        LOGIN
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
                    variant="verysmall"
                    >
                        forget Password
                    </Typography>
                    <Button
                    type="submit"
                    variant="contained">Login</Button>  
                </Box>
            </form>
        </Box>
    </>
    )
}

export default login;