import { Typography, Card, CardHeader, Avatar, IconButton, CardMedia, Box, CardContent, CardActions } from "@mui/material";
import { red } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

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
        total: 456
    },
    {
        id: 2,
        title: "Being Delivered",
        total: 456
    },
    {
        id: 3,
        title: "Delivered",
        total: 456
    },
    {
        id: 4,
        title: "Failed",
        total: 456
    },

]

const XCard = () => {
    const classes = useStyles()

    return <>
        {
            data.map(data => (
                <Card className={classes.root} sx={{ maxWidth: 345, borderRadius: '10px' }} elevation={0}>
                    <Box className={classes.media}>
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            S
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