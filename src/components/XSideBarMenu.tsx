import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
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

const useStyles = makeStyles({
    header: {
        fontSize: '30px',
        fontStyle: 'italic',
    },
    icon: {
        minWidth: '10%',
    },
    listItem: {
        '&:hover': {
            color: '#0044FF',
            backgroundColor: '#f4f5fb',
            borderRight: '5px solid #0044FF',
            '& .css-i4bv87-MuiSvgIcon-root': {
                color: '#0044FF',
            },
            '& .css-1krnuft-MuiTypography-root': {
                color: '#0044FF'
            },
        },

    }
});
const XSideBarMenu = () => {
    const classes = useStyles();

    const addIcon = (id: number) => {
        switch (id) {
            case 0:
                return <DashboardOutlinedIcon  />
            case 1:
                return <PaddingOutlinedIcon />
            case 2:
                return <LocationOnOutlinedIcon />
            case 3:
                return <GroupsOutlinedIcon />
            case 4:
                return <ShowChartOutlinedIcon />
            case 5:
                return <AccountBalanceWalletOutlinedIcon />
            default:
                return <AccountBalanceWalletOutlinedIcon />
        }
    }

    return (
        <div>
            <Toolbar >
            <h1 className={classes.header}>waybill</h1>
            </Toolbar>
            {/* <List>
                <ListItem>
                    <h1 className={classes.header}>waybill</h1>
                </ListItem>
            </List> */}
            <List>
                {['Overview', 'Shipments', 'Tracking', 'Drivers', 'Statistics', 'Wallet'].map((text, index) => (
                    <ListItem button key={text} >
                        <ListItemIcon className={classes.icon} >
                            {addIcon(index)}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Help & Support', 'Logout'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <HelpOutlineOutlinedIcon /> : <LogoutOutlinedIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    )
}
export default XSideBarMenu;