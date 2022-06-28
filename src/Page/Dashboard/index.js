import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import axios from "axios";
import Header from './Header';
import List from './List';
import Add from './Add';
import Edit from './Edit';
import Vieww from './View';

import Ppagination from './Pagination';


function Dashboard() {

      
    const [isPaginate,setIsPaginate]=useState(false)
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isView, setIsView] = useState(false);
    const [searchQM,setSearchQM]=useState("")
useEffect(async()=>{
    
    async function getBooking(){
        const d=await axios.get('http://localhost:4000/get-all-bookings');
     console.log(d)
        setEmployees(d.data.bookings)
        if(d.data.bookings.length>2){
            setIsPaginate(true)
        }
        }
        getBooking()



},[])
    const handleEdit = (id) => {
        const [employee] = employees.filter(employee => employee._id === id);

        setSelectedEmployee(employee);
        setIsEditing(true);
    }
    const handleView = (id) => {
        const [employee] = employees.filter(employee => employee._id === id);

        setSelectedEmployee(employee);
        setIsView(true);
    }

const handleSearchQuery=(serachQ)=>{
setSearchQM(serachQ)
console.log('hello');
console.log(serachQ)

}

    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [employee] = employees.filter(employee => employee._id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${employee.Fname} ${employee.Lname}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });
let filteredData=employees.filter(employee => employee._id !== id)
                setEmployees(filteredData);
             if( filteredData.length<=2) setIsPaginate(false)
                axios.delete(`http://localhost:4000/delete/${id}`).then(r=>console.log(r))
            }
        });
    }


    return (
        <div className='container'>
        
            {/* List */}
            {!isAdding && !isEditing && !isView &&(
                <>
                    <Header
                        setIsAdding={setIsAdding}
                        handleSearchQuery={handleSearchQuery}

                    />
                    <List
                        employees={employees}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                        handleView={handleView}
                        searchQM={searchQM}
                     
                    />
                </>
            )}
            {/* Add */}
            {isAdding && (
                <Add
                    employees={employees}
                    setEmployees={setEmployees}
                    setIsAdding={setIsAdding}
                    handleSearchQuery={handleSearchQuery}
                    setIsPaginate={setIsPaginate}
                />
            )}
            {/* Edit */}
            {isEditing && (
                <Edit
                    employees={employees}
                    selectedEmployee={selectedEmployee}
                    setEmployees={setEmployees}
                    setIsEditing={setIsEditing}
                />
            )}
                
            {/* {View} */}
            {isView && (
                <Vieww
                    employees={employees}
                    selectedEmployee={selectedEmployee}
                    setEmployees={setEmployees}
                    setIsView={setIsView}
                />
            )}
          
           {isPaginate && (
            <Ppagination></Ppagination>
           )}
        </div>
    )
}

export default Dashboard;