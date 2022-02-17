import React from 'react'

function TableData({tag, linkProp, linkVal, metaProp, metaVal, value}) {

    console.log(tag)
  return (
    <tr>
        <td>{tag}/{linkProp}{metaProp}</td>
        <td>{value}</td>
    </tr>

  )
}

export default TableData