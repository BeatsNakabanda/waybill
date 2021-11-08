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
        marginTop: '20px'
    },
    section: {
        display: 'flex',
        marginTop: '20px'
    },
    
})

const Dashboard = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Toolbar />
            <Box className={classes.section}>
                <h2 className={classes.title}>Overview</h2>
                <XSelectForm />
            </Box>
            <Box className={classes.cards}>
                <XCard />
            </Box>
            <Box className={classes.section}>
                <h2 className={classes.title}>Recent Shipments</h2>
                <XSelectForm />
            </Box>


        </div>
    )
}

export default Dashboard;