import React from 'react'

const ViewModal = (props) => {
    console.log("loading: ", props)
  return (
    <div className="modal fade" id={"viewModal"+props.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{props.modalName || <h1>Modal title</h1>}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            {
                !props.isLoading && props.employeeData ? 
                <div className="modal-body">
                    <h1>Name {props.employeeData.employee_name}</h1>
                    <hr></hr>
                    <h2>Salary {props.employeeData.salary}</h2>

                </div>
                :
                <div className="modal-body">
                    <h1>Loading... </h1>
                </div>

            }
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ViewModal