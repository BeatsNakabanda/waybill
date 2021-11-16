import * as React from 'react';
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import ListItemIcon from "@mui/material/ListItemIcon";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PaddingOutlinedIcon from '@mui/icons-material/PaddingOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { makeStyles } from '@mui/styles';
import { useState } from "react";

const useStyles = makeStyles({
    root: {
        '& .MuiButtonBase-root': {
            marginTop: '10px',
            '&:hover': {
                color: '#0044FF',
                backgroundColor: '#f4f5fb',
                borderRight: '5px solid #0044FF',
                '& .MuiSvgIcon-root': {
                    color: '#0044FF',
                },
                '& .MuiListItemText-primary': {
                    color: '#0044FF'
                }
            },
            '& .MuiSvgIcon-root': {
                color: '#9e9fae'
            },
            '& .MuiTypography-root': {
                color: '#9e9fae'
            }
        },
        '& .css-1ltavsv.Mui-selected': {
            color: '#0044FF',
            backgroundColor: '#f4f5fb',
            '& .MuiSvgIcon-root': {
                color: '#0044FF',
            },
            '& .MuiListItemText-primary': {
                color: '#0044FF'
            }
        },
        '& .Mui-selected': {
            color: '#0044FF',
            backgroundColor: '#f4f5fb',
            borderRight: '5px solid #0044FF',
            '& .MuiSvgIcon-root': {
                color: '#0044FF',
            },
            '& .MuiListItemText-primary': {
                color: '#0044FF'
            }
        },
        '& .MuiDrawer-paper': {
            borderRight: 'none',
        },

    },
    header: {
        fontSize: '30px',
        fontStyle: 'italic',
    },
    icon: {
        minWidth: '10%',
        // color: '#f1f1f3'
    },
    text: {
        color: '#e3e4e8',
    },
});
const XSideBarMenu = () => {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
        setSelectedIndex(index);
    };

    return (
        <div className={classes.root}>
            <Toolbar >
                <h1 className={classes.header}>waybill</h1>
            </Toolbar>
            <List>
                <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <ListItemIcon >
                        <DashboardOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Overview" />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                    <ListItemIcon>
                        <PaddingOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Shipments" />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                >
                    <ListItemIcon>
                        <LocationOnOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Tracking" />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 4}
                    onClick={(event) => handleListItemClick(event, 4)}
                >
                    <ListItemIcon>
                        <GroupsOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drivers" />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 5}
                    onClick={(event) => handleListItemClick(event, 5)}
                >
                    <ListItemIcon>
                        <ShowChartOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Statistics" />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 6}
                    onClick={(event) => handleListItemClick(event, 6)}
                >
                    <ListItemIcon>
                        <AccountBalanceWalletOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Wallet" />
                </ListItemButton>
            </List>
            <Divider sx={{ mb: '30px', mt: '30px' }} />
            <List>
                <ListItemButton
                    selected={selectedIndex === 7}
                    onClick={(event) => handleListItemClick(event, 7)}
                >
                    <ListItemIcon>
                        <HelpOutlineOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Help & Support" />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 8}
                    onClick={(event) => handleListItemClick(event, 8)}
                >
                    <ListItemIcon>
                        <LogoutOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItemButton>
                {/* {['Help & Support', 'Logout'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <HelpOutlineOutlinedIcon /> : <LogoutOutlinedIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))} */}
            </List>
        </div>
    )
}
export default XSideBarMenu;