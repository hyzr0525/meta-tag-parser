import React from 'react'
import TableData from './TableData'
import {useState} from 'react'

function ParsedTable({metaData, setMetaData}) {
 
  // const tags = metaData.children
  // const dataRow = Array.from(metaData)?.map(tag => <TableData tag={tag}/>)
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

    const dataRow = Array.from(metaData)?.map((data) => <TableData tag={data.tagName}  linkProp={data.getAttribute("rel")} metaProp={data.getAttribute("property")}  value={data.textContent || data.getAttribute("href")} />)

    console.log(Array.from(metaData).sort(function(a,b){
      let valueA = a.getAttribute("href") || a.textContent.toLowerCase()
      let valueB = b.getAttribute("href") || b.textContent.toLowerCase()

      if (valueA  < valueB) return -1;
      if (valueA > valueB) return 1;
      return 0;
    }))

    console.log(Array.from(metaData))

  return (
    <div>
      <table >

        <tr>
          <th onClick={()=>handleSort("tag")}>Tag/Property</th>
          <th onClick={()=>handleSort("value")}>Value</th>
        </tr>

        {dataRow}

      </table>
    </div>
  )
}

export default ParsedTable

// {dataRow}