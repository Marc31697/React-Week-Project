import React, { useState } from 'react'
import {DataGrid, GridColDef, GridSelectionModel } from '@material-ui/data-grid'
import { server_calls } from '../api';
import { useGetData } from '../../components/custom-hooks';
import { Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
  } from '@material-ui/core'
import { CarForm } from '../../components';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'make',
      headerName: 'Make',
      width: 150,
      editable: true,
    },
    {
      field: 'model',
      headerName: 'Model',
      width: 150,
      editable: true,
    },
    {
      field: 'color',
      headerName: 'Color',
      width: 150,
      editable: true,
    },
    {
      field: 'year',
      headerName: 'Year',
      type: 'integer',
      width: 150,
      editable: true,
    },
    {
      field: 'max_speed',
      headerName: 'Max Speed',
      width: 150,
      editable: true,
    },
    {
      field: 'miles_per_gallon',
      headerName: 'Miles Per Gallon',
      width: 150,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 150,
      editable: true,
    },
  ];

export const DataTable = () => {
  let {carData, getData} = useGetData();
  let [open, setOpen] = useState(false)
  let [gridData, setData] = useState<GridSelectionModel>([])

  let handleOpen = () => {
    setOpen(true)
  }
  let handleClose = () => {
    setOpen(false)
  }

  let deleteData = () => {
    server_calls.delete(`${gridData[0]}`)
    getData()
  }

    return (
        <div style={{ height: 400, width: '100%' }}>
            <h2>Cars in Inventory</h2>
            <DataGrid rows ={carData} columns={columns} pageSize={5} checkboxSelection onSelectionModelChange={(newSelectionModel) => {
            setData(newSelectionModel);
            }}
            selectionModel={gridData}
            {...carData}/>
            <Button onClick={handleOpen}>Update</Button>
            <Button variant="contained" color='secondary' onClick={deleteData}>Delete</Button>

            {/* Dialog Pop up starts here */}
            <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
              <DialogTitle id='form-dialog-title'>Update Car {gridData[0]}</DialogTitle>
              <DialogContent>
                <DialogContentText>Car: {gridData[0]}</DialogContentText>
                <CarForm id={`${gridData[0]}`} />
              </DialogContent>
                <Button onClick = {handleClose} color='primary'>Cancel</Button>
            </Dialog>
        </div>
    )
}