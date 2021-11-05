import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { useState } from "react";

const XSelectForm = (props: any) => {
    const [period, setPeriod] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setPeriod(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120, ml: 3, bgcolor: '#fff', borderRadius: '5px', }}>
            <FormControl fullWidth variant="standard">
                <InputLabel id="demo-simple-select-label">This Month</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={period}
                    label="This week"
                    onChange={handleChange}
                >
                    <MenuItem value={'This week'}>This week</MenuItem>
                    <MenuItem value={'Next week'}>Next week</MenuItem>
                    <MenuItem value={'This Month'}>This Month</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default XSelectForm;