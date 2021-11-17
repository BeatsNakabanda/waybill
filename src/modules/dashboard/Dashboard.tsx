import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import Toolbar from "@mui/material/Toolbar";
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from "@mui/styles";
import XCard from "../../components/XCard";
import XSelectForm from "../../components/XSelectForm";
import useFetch from "../useFetch";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";
import React from "react";
import { Console } from "console";


const useStyles = makeStyles({
  root: {
    // '& .MuiDataGrid-columnHeaderTitle': {
    //   fontSize: '16px',
    //   fontWeight: 0,
    // },
    // '& .MuiDataGrid-root .MuiDataGrid-columnHeaderTitle': {
    //   // fontWeight: 0,
    //   // backgroundColor: 'darksalmon'
    // }
    // // '& .data-grid--header': {
    // //   fontSize: '16px',
    // //   fontWeight: 'bold',

    // //   // backgroundColor: '#293370',
    // // }
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
  dataGridHeader: {
    fontWeight: 'bold',
  }

})

const setStatus = (GridCellValue: any) => {
  switch (GridCellValue) {
    case "Delivered":
      return <p style={{ backgroundColor: '#ecf8f2', color: '#006622', borderRadius: '10px', lineHeight: '0px', padding: '18px' }}>Delivered</p>
    case "In progress":
      return <p style={{ backgroundColor: '#fff5e6', color: '#e68a00', borderRadius: '10px', lineHeight: '0px', padding: '18px' }}>In progress</p>
    case "Failed":
      return <p style={{ backgroundColor: '#ffe6e6', color: '#b30000', borderRadius: '10px', lineHeight: '0px', padding: '18px' }}>Failed</p>
    default:
      return <p style={{ backgroundColor: '#fff5e6', color: 'orange', borderRadius: '10px', lineHeight: '0px', padding: '18px' }}>Pending</p>
  }
}


const options = [
  'View Details',
  'Delete',
];

const Dashboard = () => {
  const classes = useStyles()
  const { shipmentData, isLoading, isError } = useFetch("/shipments");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const columns: GridColDef[] = [
    {
      field: 'trackingId',
      headerName: 'Tracking ID',
      width: 150,
      // headerClassName: 'data-grid--header',
      editable: false,
      sortable: false,
      flex: 1,
    },
    {
      field: 'date',
      headerName: 'Date',
      width: 110,
      editable: false,
      sortable: false,
      flex: 1
    },
    {
      field: 'sender',
      headerName: 'Sender',
      width: 130,
      editable: false,
      sortable: false,
      flex: 1
    },
    {
      field: 'origin',
      headerName: 'Origin',
      width: 190,
      editable: false,
      sortable: false,
      flex: 1
    },
    {
      field: 'destination',
      headerName: 'Destination',
      sortable: false,
      width: 190,
      flex: 1
    },
    {
      field: 'driver',
      headerName: 'Driver',
      sortable: false,
      width: 160,
      flex: 1
    },
    {
      field: 'status',
      headerName: 'Status',
      sortable: false,
      width: 150,
      flex: 1,
      renderCell: (params) => (
        <>
          {setStatus(params.getValue(params.id, 'status'))}
        </>
      )
    },
    {
      field: 'action',
      headerName: 'Action',
      // align: 'center',
      sortable: false,
      width: 90,   
      renderCell: () => (
        <>
        <IconButton
        aria-label="more"
        id="long-button"
        aria-controls="long-menu"
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon sx={{color:'#d9d9d9', cursor: 'pointer'}} />
        </IconButton>
  
        <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}>
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'View Details'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
        </Menu>
      </>
      )
    }
  ];

  return (
    <div className={classes.root}>
      <Toolbar />
      <Box className={classes.section}>
        <h2 className={classes.title}>Overview</h2>
        <XSelectForm value='40' />
      </Box>
      <Box className={classes.cards}>
        <XCard />
      </Box>
      <Box className={classes.section}>
        <h2 className={classes.title}>Recent Shipments</h2>
        <XSelectForm value='10' />
      </Box>

      <div style={{ height: 400, width: '100%', paddingTop: '10px' }}>
        {shipmentData && (
          <DataGrid
            style={{
              backgroundColor: '#fff',
              height: 500,
              border: 0,
              borderRadius: '10px',
              padding: '30px',
            }}
            rowHeight={70}
            rows={shipmentData}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            disableColumnMenu
          />
        )}
      </div>

    </div>
  )
}

export default Dashboard;