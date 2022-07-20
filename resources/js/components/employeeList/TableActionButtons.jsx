import React from 'react'

const TableActionButtons = (props) => {
  return (
    <div className='btn-group' role='group'>
        
        <button 
            type='button' 
            className='btn btn-primary'
            data-bs-toggle="modal" 
            data-bs-target="#exampleModal"
        > 
            View
        </button>

        <button 
            type='button' 
            className='btn btn-info'
            data-bs-toggle="modal" 
            data-bs-target="#exampleModal"
        > 
            Update
        </button>

        <button 
            type='button' 
            className='btn btn-danger'
            data-bs-toggle="modal" 
            data-bs-target="#exampleModal"
        > 
            Delete
        </button>

    </div>
  )
}

export default TableActionButtons