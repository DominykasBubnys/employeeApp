import React, { useState } from 'react'

const UpdateModal = (props) => {
    
    const [updatedName, setUpdatedName] = useState();
    const [updatedSalary, setUpdatedSalary] = useState();

    const onSubmitData = (e) => {
        e.preventDefault();
        console.log("submitas cia yra senelyzai !");
        console.log("values: ", updatedName, " | ", updatedSalary);
    }

    const changeNameHandler = (e) => {
        // console.log("new name text: ", e.target.value);
        setUpdatedName(e.target.value);
    }

    const changeSalaryHandler = (e) => {
        // console.log("new salary text: ", e.target);
        setUpdatedSalary(e.target.value);
    }

  return (
    <div className="modal fade" id={"updateModal"+props.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{props.modalName || <h1>Modal title</h1>}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            {
                !props.isLoading && props.employeeData ? 
                <div className="modal-body">
                    
                    <form className='form'>
                        <div className='form-group'>
                            <input 
                                type="text" 
                                id="employeeName" 
                                value={updatedName || props.employeeData.employee_name} 
                                onChange={changeNameHandler}
                            />
                        </div>

                        <div className='form-group'>
                            <input 
                                type="text" 
                                id="employeeSalary" 
                                value={updatedSalary || props.employeeData.salary} 
                                onChange={changeSalaryHandler}
                            />
                        </div>
                    </form>

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

export default UpdateModal