import React from 'react';

import { Box, List, ListItem, ListItemIcon } from '@mui/material';
import { HomeOutlined, ImageOutlined, VideocamOutlined, PieChartOutlineOutlined, AssignmentOutlined } from '@mui/icons-material';

const ICON_COLOR = {color: "white"}

function Menu() {
    return (
        <Box className="menu-container">
        <List item className='list-icons'>
            <ListItem>
                <ListItemIcon>
                    <HomeOutlined sx={ICON_COLOR} />
                </ListItemIcon>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <ImageOutlined sx={ICON_COLOR} />
                </ListItemIcon>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <VideocamOutlined sx={ICON_COLOR} />
                </ListItemIcon>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <PieChartOutlineOutlined sx={ICON_COLOR} />
                </ListItemIcon>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <AssignmentOutlined sx={ICON_COLOR} />
                </ListItemIcon>
            </ListItem>
        </List>
        </Box>
    );
    }
export default Menu;