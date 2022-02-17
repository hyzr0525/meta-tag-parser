import React from 'react'
import TableData from './TableData'

function ParsedTable({metaData}) {
  console.log(metaData)
  // const tags = metaData.children
  // const dataRow = Array.from(metaData)?.map(tag => <TableData tag={tag}/>)

    const dataRow = Array.from(metaData).map((data) => <TableData tag={data.tagName}  linkProp={data.getAttribute("rel")} linkVal={data.getAttribute("href")} metaProp={data.getAttribute("property")} metaVal={data.textContent}/>)
   
  return (
    <div>
      <table >

        <tr>
          <th>Tag/Property</th>
          <th>Value</th>
        </tr>

        {dataRow}

      </table>
    </div>
  )
}

export default ParsedTable

// {dataRow}