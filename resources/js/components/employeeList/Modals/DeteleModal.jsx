import React, { useState } from 'react'
import axios from "axios"


const DeteleModal = (props) => {

    const onSubmitData = (e) => {
        e.preventDefault();
    }

  return (
    <div className="modal fade" id={"updateModal"+props.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{props.modalName || <h1>Delete employee</h1>}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            {
                !props.isLoading && props.employeeData ? 
                <div className="modal-body">
                    
                    <h1>Are you sure, You want to delete this employee data?</h1>

                </div>
                :
                <div className="modal-body">
                    <h1>Loading... </h1>
                </div>

            }
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <div className='modal-footer'>
                    <input 
                        type="submit"
                        className='btn btn-info'
                        value="Update"
                        onClick={onSubmitData}
                    />
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default DeteleModal;