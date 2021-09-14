import React from 'react'
import {DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid'

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
      field: 'year',
      headerName: 'Year',
      type: 'integer',
      width: 150,
      editable: true,
    },
  ];
  
  const rows = [
    { id: 1, make: 'Audi', model: 'A4', year: 2010 },
    { id: 2, make: 'Tesla', model: 'Model 3', year: 2021 },
    { id: 3, make: 'BMW', model: 'I8', year: 2020 },
    { id: 4, make: 'Mercedes-Benz', model: 'VISION AVTR', year: 2022 },
    { id: 5, make: 'Audi', model: 'R8', year: 2018 },
    { id: 6, make: 'Chevrolet', model: 'El Camino', year: 1968 },
    { id: 7, make: 'Porsche', model: '911', year: 1974 },
  ];

export const DataTable = () => {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <h2>Cars in Inventory</h2>
            <DataGrid rows ={rows} columns={columns} pageSize={10} checkboxSelection />
        </div>
    )
}