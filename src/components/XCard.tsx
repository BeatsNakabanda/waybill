import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import { red } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        backgroundColor: '#FFF',
        marginRight: '10px',
        cursor: 'pointer',
        '& .css-46bh2p-MuiCardContent-root:last-child': {
            padding: '0px'
        },
        '& .makeStyles-media-22': {
            padding: '20px'
        }
    },
    mainContent: {
        paddingRight: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
    },
    media: {
        padding: '30px',
        alignSelf: 'center',
    },
    icon1: {
        color: 'blue'
    },
    icon2: {
        color: 'red'
    },
    icon3: {
        color: 'green'
    },
    icon4: {
        color: 'blue'
    },

})

interface IProps {
    id: number
    title: string
    total: number,
    color: string
}

let data: IProps[] = [
    {
        id: 1,
        title: "Total Shipments",
        total: 456,
        color: 'blue'
    },
    {
        id: 2,
        title: "Being Delivered",
        total: 300,
        color: 'orange'
    },
    {
        id: 3,
        title: "Delivered",
        total: 100,
        color: 'green'
    },
    {
        id: 4,
        title: "Failed",
        total: 50,
        color: 'red'
    },

]

const XCard = () => {
    const classes = useStyles()

    const addIcon = (id: number) => {
        switch (id) {
            case 0:
                return <ShoppingBasketOutlinedIcon />
            case 1:
                return <ShoppingBasketOutlinedIcon   />
            case 2:
                return <ShoppingBasketOutlinedIcon   />
            case 3:
                return <ShoppingBasketOutlinedIcon  />
            default:
                return <ShoppingBasketOutlinedIcon   />
        }
    }

    return <>
        {
            data.map(data => (
                <Card className={classes.root} sx={{ maxWidth: 345, borderRadius: '10px' }} elevation={0}>
                    <Box className={classes.media}>
                        <Avatar sx={{ bgcolor: data.color }} aria-label="recipe">
                            {addIcon(data.id)}
                        </Avatar>
                    </Box>
                    <Box className={classes.mainContent}>
                        <CardContent >
                            <Typography variant="subtitle2">
                                {data.title}
                            </Typography>
                            <Typography variant="h4">
                                {data.total}
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            ))
        }

    </>
}

export default XCard;