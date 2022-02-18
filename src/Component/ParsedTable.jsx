import React from 'react'
import TableData from './TableData'
import {useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowDropUpSharpIcon from '@mui/icons-material/ArrowDropUpSharp';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';


function ParsedTable({metaData, setMetaData}) {
 
  const [sortOrder, setSortOrder] = useState("ASC")

  const handleSort = (colName) => {

    if (colName === "tag"){
      
      if(sortOrder === "ASC"){
        const sortedData = Array.from(metaData).sort((a,b) =>
        a.tagName > b.tagName? 1 : -1
        );
        setMetaData(sortedData)
        setSortOrder("DSC")
      }

      if(sortOrder === "DSC"){
        const sortedData = Array.from(metaData).sort((a,b) =>
        a.tagName < b.tagName? 1 : -1
        );
        setMetaData(sortedData)
        setSortOrder("ASC")
      }
      return 0;
    }

    if(colName === "value"){

      if(sortOrder === "ASC"){
        const sortedData = Array.from(metaData).sort((a,b)=>{
          let valueB = b.getAttribute("href") || b.textContent.toLowerCase()
          let valueA = a.getAttribute("href") || a.textContent.toLowerCase()
          if (valueA  < valueB) return -1;
          if (valueA > valueB) return 1;
          return 0;

        });
        setMetaData(sortedData)
        setSortOrder("DSC")
      }
      
      if(sortOrder === "DSC"){
        const sortedData = Array.from(metaData).sort((a,b)=>{
          let valueA = a.getAttribute("href") || a.textContent.toLowerCase()
          let valueB = b.getAttribute("href") || b.textContent.toLowerCase()
          if (valueA  < valueB) return 1;
          if (valueA > valueB) return -1;
          return 0;
        });
        setMetaData(sortedData)
        setSortOrder("ASC")
      }
      return 0;
    }

  }

  const sortIcon = (sortOrder === "ASC") ? <ArrowDropUpSharpIcon/>:<ArrowDropDownSharpIcon/>

    const dataRow = Array.from(metaData)?.map((data) => <TableData tag={data.tagName}  linkProp={data.getAttribute("rel")} metaProp={data.getAttribute("property")}  value={data.textContent || data.getAttribute("href")} />)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }}>
        <TableHead> 
          <TableRow >
            <TableCell sx={{ bgcolor: 'text.secondary', color:'white'}} className="tableHead" align="center"  onClick={()=>handleSort("tag")}>Tag/Property {sortIcon}</TableCell>
            <TableCell sx={{ bgcolor: 'text.secondary', color:'white' }} className="tableHead" align="center" onClick={()=>handleSort("value")}>Value {sortIcon}</TableCell>
          </TableRow>
      </TableHead>
      <TableBody>
        {dataRow}
      </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ParsedTable
