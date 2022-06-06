import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import { PersonAdd, DateRange } from '@mui/icons-material';

const StyleModal = styled(Modal)({
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
});

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });

const Add = () => {

    const [open, setOpen] = useState(false);

  return (
    <>
        <Tooltip 
            title="Add"
            sx={{ position: "fixed", bottom:20, left: { xs: "calc(50% - 25px)", md: 30 }}}
            onClick={(e)=>setOpen(true)}
        >
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Tooltip>
        <StyleModal
            open={open}
            onClose={(e)=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={4}>
                <Typography variant='h6' color="gray" textAlign="center">Create Post</Typography>
                <UserBox>
                    <Avatar
                    src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    sx={{ width: 30, height: 30 }}
                    />
                    <Typography fontWeight={500} variant="span">
                    John Doe
                    </Typography>
                </UserBox>
                <TextField
                    sx={{ width: "100%" }}
                    id="standard-multiline-static"
                    multiline
                    rows={3}
                    placeholder="What's on your mind?"
                    variant="standard"
                />
                <Stack direction="row" gap={1} mt={2} mb={3}>
                    <EmojiEmotionsIcon color='primary'/>
                    <ImageIcon color="secondary"/>
                    <VideoCameraBackIcon color="success"/>
                    <PersonAdd color="error"/>
                </Stack>
                <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                    <Button>Post</Button>
                    <Button sx={{ width: "100px" }}>
                        <DateRange/>
                    </Button>
                </ButtonGroup>
            </Box>
        </StyleModal>   
    </>
  )
}

export default Add