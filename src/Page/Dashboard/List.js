import React, { useState } from 'react'

function List({ searchQM,employees, handleEdit, handleDelete,handleView }) {

let list;

searchQM.trim()
console.log(searchQM.trim())
if(searchQM==""){
  list=(  <tbody>
    {employees.length > 0 ? (
        employees.map((employee, i) => (
            <tr key={employee._id}>
                <td>{i + 1}</td>
                <td>{employee.Fname}</td>
                <td>{employee.Lname}</td>
                <td>{employee.EmailId}</td>
                <td>{employee.Phone}</td>
                <td>{employee.booking_date} </td>
                <td className="text-right">
                    <button
                    onClick={() => {console.log(employee._id,employees)
                        handleView(employee._id)}}
                        className="button muted-button"
                    >
                        View
                    </button>
                </td>
                <td className="text-right">
                    <button
                    onClick={() => {console.log(employee._id,employees)
                        handleEdit(employee._id)}}
                        className="button muted-button"
                    >
                        Edit
                    </button>
                </td>
                <td className="text-left">
                    <button
                        onClick={() => handleDelete(employee._id)}
                        className="button muted-button"
                    >
                        Delete
                    </button>
                </td>
            </tr>
        ))
    ) : (
        <tr>
            <td colSpan={7}>No Employees</td>
        </tr>
    )}
</tbody>)  
}else if(searchQM!=""){
  let filteredData=  employees.filter((emp)=>{
        return emp.Fname==searchQM || emp.Lname==searchQM || emp.EmailId==searchQM || emp.Phone==searchQM || emp._id==searchQM || emp.vehicle_type==searchQM 
    })

    console.log(filteredData)
  list=  (  <tbody>
        {filteredData.length > 0 ? (
            filteredData.map((employee, i) => (
                <tr key={employee._id}>
                    <td>{i + 1}</td>
                    <td>{employee.Fname}</td>
                    <td>{employee.Lname}</td>
                    <td>{employee.EmailId}</td>
                    <td>{employee.Phone}</td>
                    <td>{employee.booking_date} </td>
                    <td className="text-right">
                        <button
                        onClick={() => {console.log(employee._id,employees)
                            handleView(employee._id)}}
                            className="button muted-button"
                        >
                            View
                        </button>
                    </td>
                    <td className="text-right">
                        <button
                        onClick={() => {console.log(employee._id,employees)
                            handleEdit(employee._id)}}
                            className="button muted-button"
                        >
                            Edit
                        </button>
                    </td>
                    <td className="text-left">
                        <button
                            onClick={() => handleDelete(employee._id)}
                            className="button muted-button"
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            ))
        ) : (
            <tr>
                <td colSpan={7}>No Employees</td>
            </tr>
        )}
    </tbody>)  
    
} else{
  list=(  <tr>
    <td colSpan={7}>No Employees</td>
</tr>)
}



    return (
        <div className='contain-table'>
            <table className='striped-table'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Date</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
              {list}
            </table>
        </div>
    )
}

export default List