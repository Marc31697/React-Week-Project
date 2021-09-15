import React, { useState } from 'react'
import {DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid'
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
  

interface gridData{
  data:{
    id?:string;
  }
}

export const DataTable = () => {
  let {carData, getData} = useGetData();
  let [open, setOpen] = useState(false)
  let [gridData, setData] = useState<gridData>({data:{}})

  let handleOpen = () => {
    setOpen(true)
  }
  let handleClose = () => {
    setOpen(false)
  }

  let deleteData = () => {
    server_calls.delete(gridData.data.id!)
    getData()
  }
  console.log(gridData.data.id)

    return (
        <div style={{ height: 400, width: '100%' }}>
            <h2>Cars in Inventory1</h2>
            <DataGrid rows ={carData} columns={columns} pageSize={5} checkboxSelection/>
            <Button onClick={handleOpen}>Update</Button>
            <Button variant="contained" color='secondary' onClick={deleteData}>Delete</Button>

            {/* Dialog Pop up starts here */}
            <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
              <DialogTitle id='form-dialog-title'>Update Car {gridData.data.id}</DialogTitle>
              <DialogContent>
                <DialogContentText>Car: {gridData.data.id}</DialogContentText>
                <CarForm id={gridData.data.id!} />
              </DialogContent>
                <Button onClick = {handleClose} color='primary'>Cancel</Button>
            </Dialog>
        </div>
    )
}