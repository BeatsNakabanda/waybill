import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
      header: {
          fontSize: '20px',
          fontStyle: 'italic'
      }  
});
const XSideBarMenu = () => {
const classes = useStyles();    

    return (
        <div>
        {/* <Toolbar /> */}
        <List>
            <ListItem>
            <h1 className={classes.header}>waybill</h1>
            </ListItem>
            </List>
        <List>
            {['Overview', 'Shipments', 'Tracking', 'Driving', 'Statistics', 'Wallet'].map((text, index) => (
                <ListItem button key={text}>
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
    )
}
export default XSideBarMenu;