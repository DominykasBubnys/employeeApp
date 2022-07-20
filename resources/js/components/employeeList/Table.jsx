import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import TableRow from './TableRow';

const Table = (props) => {

    const [employees, setEmployees] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const firstMethod = async() => {
        try {
            const req = await fetch("/get/employee/list");
            
            if(!req.ok) throw new Error("something bad happens");

            const data = await req.json();
            setEmployees(data);
            setIsLoading(false);


        } catch (error) {
            console.log("errorr: ", error)
        }
    }

    return (
        <div className="container">
            <button onClick={firstMethod}>Load data</button>

            { 
                isLoading 
                ? 
                <div>Loading...</div> 
                :
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Hello from table</div>

                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th scope='col' width="1000px">#</th>
                                        <th scope='col' width="1000px">Name</th>
                                        <th scope='col' width="1000px">Salary</th>
                                        <th scope='col' width="1000px">Actions</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {employees.map( empl => <TableRow key={empl.id} data={empl} />)}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            }
        </div>
    );

}



export default Table;


