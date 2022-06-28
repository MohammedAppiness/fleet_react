import React, { useState } from 'react'
import Swal from 'sweetalert2';
import moment from 'moment'
import axios from 'axios';
function Edit({ employees, selectedEmployee, setEmployees, setIsView }) {

    const id = selectedEmployee._id;
 
    const Fname = selectedEmployee.Fname
    const Lname = selectedEmployee.Lname
    const EmailId = selectedEmployee.EmailId
    const Phone = selectedEmployee.Phone

    const booking_date = moment(selectedEmployee.booking_date).format("YYYY-MM-DD")
    const From_address = selectedEmployee.From_address
    const To_address= selectedEmployee.To_address
    const vehicle_type = selectedEmployee.vehicle_type
    const booking_time = moment(selectedEmployee.booking_date).format("HH:MM")
    const passenger_count = selectedEmployee.passenger_count
 

    return (
        <div className="small-container">
            <form >

                <h1 className='p-3 mb-1 mt-3 bg-dark text-white'>Booking Details</h1>
                <h5 className='text-secondary'>Booking ID : {id}</h5>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={Fname}
                    disabled={true}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={Lname}
                    disabled={true}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={EmailId}
                    disabled={true}
                />
                <label htmlFor="salary">Phone</label>
                <input
                    id="salary"
                    type="number"
                    name="salary"
                    value={Phone}
                    disabled={true}
                />
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={ booking_date}
                    disabled={true}
                />
                <label htmlFor="firstName">From Address</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={From_address}
                    disabled={true}
                />
                <label htmlFor="firstName">To Address</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={To_address}
                    disabled={true}
                />
                <label htmlFor="firstName">Vehicle Type</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={vehicle_type}
                    disabled={true}
                />
                <label htmlFor="firstName">Time</label>
                <input
                    id="firstName"
                    type="time"
                    name="firstName"
                    value={booking_time}
                    disabled={true}
                />
                <label htmlFor="firstName">Passanger_count:</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={passenger_count}
                    disabled={true}
                />
                <div style={{ marginTop: '30px' }}>
          
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsView(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit