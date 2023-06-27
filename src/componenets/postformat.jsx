import { Box } from "@mui/material";
import React from "react";
import imge from "../images/Abdullah.jpg";
import PublishIcon from '@mui/icons-material/UploadOutlined';
import FileDownloadIcon from '@mui/icons-material/DownloadOutlined';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';

const postformat = () => {

    return (
        <>
            <Box sx={{
                backgroundColor: "white",
                p: 2,
                width:650,
                border: '2px solid grey',
            }}>
                <Box sx={{
                    display: "inline-flex",
                }}>
                    <img alt="prop"
                        style={{ width: 40, height: 40 }}
                        src={`${imge}`}
                    />
                    <Box sx={{
                        display: "flex",
                    }}>
                        <h4 style={{
                            marginLeft: 10,
                            marginTop: 10,
                        }}
                            id="Accname"
                        >Name</h4>
                        <h6 style={{
                            marginLeft: 10,
                            marginTop: 10,
                        }}
                            id="posttime"
                        >time</h6>
                    </Box>
                </Box>
                <Box sx={{
                    backgroundColor: "white",
                    p: 2,
                    border: '2px solid black',
                }}  >
                    <div id="b_description" ></div>
                </Box>
                <Box sx={{mt:2,}}>
                    <PublishIcon sx={{mr:2,}}></PublishIcon>
                    <FileDownloadIcon sx={{mr:2,}}></FileDownloadIcon>
                    <InsertCommentOutlinedIcon sx={{mr:2,}}></InsertCommentOutlinedIcon>
                </Box>
            </Box>
        </>
    );
}

export default postformat;