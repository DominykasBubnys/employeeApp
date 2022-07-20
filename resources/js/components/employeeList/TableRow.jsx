import React from 'react'
import TableActionButtons from './TableActionButtons'

const TableRow = (props) => {
  return (
    <tr>
        <th>{props.data.id}</th>
        <td>{props.data.employee_name}</td>
        <td>{props.data.salary}</td>

        <td>
            <TableActionButtons eachRowId={props.data.id} />
        </td>
    </tr>
  )
}

export default TableRow