import React from 'react';
import { makeStyles, styled } from '@mui/styles';
import {
    Toolbar, Divider, List, ListItem, AppBar, Drawer, Typography, Box, CssBaseline,
    ListItemText, IconButton, Grid,  InputBase } from '@mui/material';
import { Menu } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';

// const Search = styled('div')(() => ({
//     position: 'relative',
//     borderRadius: '5px',
//     backgroundColor: '',
//     '&:hover': {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(3),
//       width: 'auto',
//     },
//   }));
  
//   const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }));
  
//   const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//       padding: theme.spacing(1, 1, 1, 0),
//       vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create('width'),
//       width: '100%',
//       [theme.breakpoints.up('md')]: {
//         width: '20ch',
//       },
//     },
//   }));

const useStyles = makeStyles({
    root: {

    },
    title: {
        paddingTop: "5px",
        fontWeight: "bold",
        fontSize: "x-large"
    },
    profile: {
        float: "right",
        display: "flex",
        alignItems: "center",
    },
    profileImage: {
        paddingLeft: "0px",
        borderRadius: "50%"
    },
    link: {
        paddingRight: "20px",
        color: "#3a5f79",
        fontSize: "larger"
    },
    name: {
        paddingLeft: "20px"
    }
});

const drawerWidth = 240;

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const drawer = (
    <div>
        <Toolbar />
        <Divider />
        <List>
            {['Overview', 'Shipments', 'Tracking', 'Driving', 'Statistics', 'Wallet'].map((text, index) => (
                <ListItem button key={text}>
                    {/* <h2>Hello2</h2> */}
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            {['Help & Support', 'Logout'].map((text, index) => (
                <ListItem button key={text}>
                    {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <InboxIcon />}
                </ListItemIcon> */}
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
    </div>
);

function Layout(props: any) {
    const classes = useStyles();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <Menu />
                    </IconButton>
                    <Grid container>
                        <Grid item className={classes.title}>
                        <InputBase placeholder="Search" />
                            {/* <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search> */}

                        </Grid>
                        <Grid item sm></Grid>
                        <Grid item className={classes.profile}>
                            {/* <Link className={classes.link} to="/">
                                <NotificationsIcon />
                            </Link>
                            <img src={profile_pic} alt="logo" width="40dp" height="40dp" className={classes.profileImage} /> */}
                            <p className={classes.name}>
                                <b>Beatrice Nakabanda</b>
                            </p>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                    enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                    imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                    Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                    Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                    nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                    leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                    feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                    consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                    sapien faucibus et molestie ac.
                </Typography>

            </Box>
        </Box>
    )
}

export default Layout;