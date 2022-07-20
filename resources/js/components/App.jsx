import React from 'react'
import Table from './employeeList/Table'


const App = (props) => {
  return (
    <div className='container'>
        <div className='row justify-content-cener'>
            {/* child components */}
            <Table />
        </div>
    </div>
  )
}

export default App