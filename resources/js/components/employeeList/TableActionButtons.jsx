import axios from 'axios';
import React, { useState } from 'react'
import ViewModal from "./Modals/ViewModal";
import UpdateModal from './Modals/UpdateModal';

const TableActionButtons = (props) => {

    const [isLoading, setIsLoading] = useState(true);
    const [details, setDetails] = useState();

    const getEmployeeDetails = (id) => {

        axios.post("/get/individual/employee/details", {
            employeeId: id
        })
        .then(response => {
            setIsLoading(false);
            setDetails(response.data);
        })
        .catch(err => console.log("error'as: ", err))

    }

  return (
    <div className='btn-group' role='group'>
        
        <button 
            type='button' 
            className='btn btn-primary'
            data-bs-toggle="modal" 
            data-bs-target={"#viewModal"+props.eachRowId}
            onClick={() => getEmployeeDetails(props.eachRowId)}
        > 
            View
        </button>
        <ViewModal modalName={"Details"} modalId={props.eachRowId} isLoading={isLoading} employeeData={details} />


        <button 
            type='button' 
            className='btn btn-info'
            data-bs-toggle="modal" 
            data-bs-target={"#updateModal"+props.eachRowId}
            onClick={() => getEmployeeDetails(props.eachRowId)}
        > 
            Update
        </button>
        <UpdateModal modalName={"Update"} modalId={props.eachRowId} isLoading={isLoading} employeeData={details}/>

        <button 
            type='button' 
            className='btn btn-danger'
        > 
            Delete
        </button>

    </div>
  )
}

export default TableActionButtons