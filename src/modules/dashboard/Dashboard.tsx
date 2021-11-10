import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { makeStyles } from "@mui/styles";
import XCard from "../../components/XCard";
import XSelectForm from "../../components/XSelectForm";
import useFetch from "../useFetch";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const useStyles = makeStyles({
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
  dataGrid: {
    '& .MuiDataGrid-columnHeaderWrapper': {
      '& .MuiDataGrid-iconSeparator': {
        height: '0px'
      }
    },
    // '& .MuiDataGrid-row.Mui-odd': {
    //   '&:hover': {
       
    //   }
    // },
  }

})

const setStatus = (GridCellValue: any) => {
  switch (GridCellValue) {
    case "Delivered":
      return <p style={{ backgroundColor: '#ecf8f2', color: '#006622', borderRadius:'10px', lineHeight: '30px', paddingLeft: '5px', paddingRight: '5px'}}>Delivered</p>
    case "In progress":
      return <p style={{ backgroundColor: '#fff5e6', color: '#e68a00', borderRadius:'10px', lineHeight: '30px', paddingLeft: '5px', paddingRight: '5px'}}>In progress</p>
    case "Failed":
      return <p style={{ backgroundColor: '#ffe6e6', color: '#b30000', borderRadius:'10px', lineHeight: '30px', paddingLeft: '5px', paddingRight: '5px'}}>Failed</p>
    default:
      return <p style={{ backgroundColor: '#fff5e6', color: 'orange', borderRadius:'10px', lineHeight: '30px', paddingLeft: '5px', paddingRight: '5px'}}>Pending</p>
  }
}

const columns: GridColDef[] = [
  {
    field: 'trackingId',
    headerName: 'Tracking ID',
    width: 150,
    editable: false,
    sortable: false,
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 110,
    editable: false,
    sortable: false,
  },
  {
    field: 'sender',
    headerName: 'Sender',
    width: 130,
    editable: false,
    sortable: false,
  },
  {
    field: 'origin',
    headerName: 'Origin',
    width: 190,
    editable: false,
    sortable: false,
  },
  {
    field: 'destination',
    headerName: 'Destination',
    sortable: false,
    width: 190,
  },
  {
    field: 'driver',
    headerName: 'Driver',
    sortable: false,
    width: 160,
  },
  {
    field: 'status',
    headerName: 'Status',
    sortable: false,
    width: 150,
    renderCell: (params) => (
      <>
        {setStatus(params.getValue(params.id, 'status'))}
      </>
    )
  },
  {
    field: 'action',
    headerName: 'Action',
    sortable: false,
    width: 100,
    renderCell: () => (
      <MoreVertIcon sx={{color:'#d9d9d9', cursor: 'pointer'}} />
    )
  }
];

const Dashboard = () => {
  const classes = useStyles()
  const { shipmentData, isLoading, isError } = useFetch("/shipments");

  return (
    <div>
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

      <div style={{ height: 400, width: '100%', paddingTop: '10px' }}>
        {shipmentData && (
          <DataGrid
            className={classes.dataGrid}
            style={{
              backgroundColor: '#fff',
              height: 500,
              // width: '100%',
              border: 0,
              borderRadius: '10px',
              padding: '30px',
              fontStyle: 'bold',
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