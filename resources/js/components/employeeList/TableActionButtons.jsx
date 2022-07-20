import React from 'react'

const TableActionButtons = (props) => {
  return (
    <div className='btn-group' role='group'>
        
        <button type='button' className='btn btn-primary'> 
            View
        </button>

        <button type='button' className='btn btn-info'> 
            Update
        </button>

        <button type='button' className='btn btn-danger'> 
            Delete
        </button>

    </div>
  )
}

export default TableActionButtons