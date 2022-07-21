import React, { useState } from 'react'
import axios from "axios"
const UpdateModal = (props) => {
    
    const [updatedName, setUpdatedName] = useState(0);
    const [updatedSalary, setUpdatedSalary] = useState(0);

    const onSubmitData = (e) => {
        e.preventDefault();
        const newName = updatedName || props.employeeData.employee_name;
        const newSalary = updatedSalary || props.employeeData.salary;

        console.log("values: [", newName, " | ", newSalary, "]");

        axios.post('/update/employee/data', {
            employeeId: props.modalId,
            employeeName: newName,
            employeeSalary: newSalary,
        })
        .then(response => {
            location.reload();
        })
        .catch(err => console.log("error in updateModal: ", err));
    }

    const changeNameHandler = (e) => {
        setUpdatedName(e.target.value);
    }

    const changeSalaryHandler = (e) => {
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
                                value={updatedName===0 ? props.employeeData.employee_name : updatedName} 
                                onChange={changeNameHandler}
                            />
                        </div>

                        <div className='form-group'>
                            <input 
                                type="text" 
                                id="employeeSalary" 
                                value={updatedSalary===0 ? props.employeeData.salary : updatedSalary} 
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