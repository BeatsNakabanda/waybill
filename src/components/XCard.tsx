import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import CardContent from "@mui/material/CardContent";
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import { makeStyles } from "@mui/styles";
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        backgroundColor: '#FFF',
        marginRight: '10px',
        marginTop: '20px',
        cursor: 'pointer',
        '& .MuiCardContent-root:last-child': {
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
        color: '#e68a00'
    },
    icon3: {
        color: '#006622'
    },
    icon4: {
        color: '#b30000'
    },

})

interface IProps {
    id: number
    title: string
    total: number
}

let data: IProps[] = [
    {
        id: 1,
        title: "Total Shipments",
        total: 456,
    },
    {
        id: 2,
        title: "Being Delivered",
        total: 300,
    },
    {
        id: 3,
        title: "Delivered",
        total: 100,
    },
    {
        id: 4,
        title: "Failed",
        total: 50,
    },

]

const XCard = () => {
    const classes = useStyles()

    const addIcon = (id: number) => {
        switch (id) {
            case 1:
                return <Avatar sx={{ bgcolor: '#e6f0ff' }} aria-label="recipe"><ShoppingBasketOutlinedIcon className={classes.icon1} /></Avatar>
            case 2:
                return <Avatar sx={{ bgcolor: '#fff5e6' }} aria-label="recipe"><HourglassTopIcon className={classes.icon2} /></Avatar>
            case 3:
                return <Avatar sx={{ bgcolor: '#ecf8f2' }} aria-label="recipe"><CheckIcon className={classes.icon3} /></Avatar>
            case 4:
                return <Avatar sx={{ bgcolor: '#ffe6e6' }} aria-label="recipe"><CloseIcon className={classes.icon4} /></Avatar>
            default:
                return <Avatar sx={{ bgcolor: '#cce0ff' }} aria-label="recipe"><ShoppingBasketOutlinedIcon className={classes.icon1} /></Avatar>
        }
    }

    return <>
        {
            data.map(data => (
                <Card className={classes.root} sx={{ width: '22%', borderRadius: '10px'}} elevation={0}>
                    <Box className={classes.media}>
                            {addIcon(data.id)}
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