import React from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow'

function TableData({tag, linkProp, metaProp, value}) {

  return (
    <TableRow>
        <TableCell align="left">{tag}/{linkProp}{metaProp}</TableCell>
        <TableCell align="left">{value}</TableCell>
    </TableRow>

  )
}

export default TableData