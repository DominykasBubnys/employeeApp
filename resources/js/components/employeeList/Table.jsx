import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Table = (props) => {

    const firstMethod = async() => {
        try {
            const req = await fetch("/get/employee/list");
            
            console.log("req: ", req)

            if(!req.ok) throw new Error("something bad happens");

            const data = await req.json();

            console.log("data: ", data)


        } catch (error) {
            console.log("errorr: ", error)
        }
    }

    return (
        <div className="container">
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
                                <tr>
                                    <th>1</th>
                                    <th>Mark</th>
                                    <th>Otto</th>
                                    <th>@mdo</th>
                                </tr>
                            </tbody>
                        </table>

                        <button onClick={firstMethod}>Submitas</button>
                    </div>
                </div>
            </div>
        </div>
    );

}



export default Table;


