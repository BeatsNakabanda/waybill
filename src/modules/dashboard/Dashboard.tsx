import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";
import XCard from "../../components/XCard";
import XSelectForm from "../../components/XSelectForm";

const useStyles = makeStyles({
    root: {
        
    },
    cards: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    title: {
        color: '#293370',
    },
    overview: {
        display: 'flex',
    },
    form: {
        backgroundColor: 'red',
        paddingLeft: '16px'
    }
})

const Dashboard = () => {
    const classes = useStyles()
   
    return (
        <div className={classes.root}>
            <Toolbar />
            <Box className={classes.overview}>
                <h2 className={classes.title}>Overview</h2>
                <XSelectForm className={classes.form} />
            </Box>

            <Box className={classes.cards}>
                <XCard />
            </Box>
            <h2 className={classes.title}>Recent Shipments</h2>

        </div>
    )
}

export default Dashboard;