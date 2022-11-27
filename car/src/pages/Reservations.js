import React, { useState, useEffect } from "react";
import DefaultLayout from '../components/DefaultLayout'
import { useDispatch, useSelector } from "react-redux";
import { getAllBookings } from "../redux/actions/bookingActions";
import { Col, Row } from "antd";
import Moment from 'moment';

const Reservations = () => {
    const dispatch = useDispatch();
    const { bookings } = useSelector((state) => state.bookingsReducer);
    const {loading} = useSelector((state) => state.alertsReducer);
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
      dispatch(getAllBookings());
    }, []);



  return (
    <DefaultLayout>
         {loading }
      <h3 className="text-center mt-2"> My Reservations</h3>
    
      <Row justify="center" gutter={16}>
        <Col lg={16} sm={24}>
         
            {bookings.filter(o=>o.user==user._id).map((booking) => {
             return <Row gutter={16} className="bs1 mt-3 text-left reservation">
                <Col lg={6} sm={24}>
                    
                    <p><b>{booking.car.name}</b></p>
                    <p><b>{booking.car.category}</b></p>
                    <p>Total hours : <b>{booking.totalHours}</b></p>
                    <p>Rent per Day : <b>{booking.car.rentPerDay}</b></p>
                    <p>Total amount : <b>{booking.totalAmount}</b></p>
                </Col>
                

                <Col lg={12} sm={24}>
                <p>Status: Pending</p>
                <p>From: <b>May 19 2022</b></p>
                <p>To: <b>May 21 2022</b></p>
                <p>Date of booking: <b>{Moment(booking.createdAt).format('MMM DD yyyy')}</b></p>
                </Col>

                <Col lg={6} sm={24} className='text-right'>
                    <img style={{borderRadius:5}} src={booking.car.image}  height="140" className="p-2"/>
                </Col>
               
              </Row>;
            })}
          
        </Col>
      </Row>
    </DefaultLayout>
  );

   
}

export default Reservations