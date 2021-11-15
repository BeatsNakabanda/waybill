import FormControl from "@mui/material/FormControl";
import { makeStyles } from '@mui/styles';
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

const useStyles = makeStyles({
    root: {
        borderRadius: '5px',
        minWidth: 120,
        backgroundColor: '#fff',
        alignSelf: 'center',
    }
})

const XSelectForm = ({value}: { value: string }) => {
    const classes = useStyles();
    const [period, setPeriod] = useState(value);

    const handleChange = (event: SelectChangeEvent) => {
        setPeriod(event.target.value as string);
    };

    return (
        <FormControl sx={{ ml: 3, p: 1 }} variant="standard" className={classes.root}>
            <Select
                value={period}
                onChange={handleChange}
                displayEmpty
                disableUnderline
                inputProps={{ 'aria-label': 'Without label' }}
            >
                <MenuItem value={10}>This week</MenuItem>
                <MenuItem value={20}>Last week</MenuItem>
                <MenuItem value={30}>Next week</MenuItem>
                <MenuItem value={40}>This month</MenuItem>
                <MenuItem value={50}>Last month</MenuItem>
                <MenuItem value={260}>Next month</MenuItem>
            </Select>
        </FormControl>
    )
}

export default XSelectForm;