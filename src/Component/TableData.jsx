import React from 'react'

function TableData({tag, linkProp, linkVal, metaProp, metaVal}) {

    console.log(tag)
  return (
    <tr>
        <td>{tag}/{linkProp}{metaProp}</td>
        <td>{linkVal}{metaVal}</td>
    </tr>

  )
}

export default TableData