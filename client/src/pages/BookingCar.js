
import React, {useState,useEffect } from 'react'
import {  useSelector ,useDispatch} from 'react-redux'
import { Row,Col,Divider,DatePicker, Checkbox ,Modal} from 'antd';
import { getAllCars } from '../redux/actions/carsAction';
import Moment from 'moment';
import DefaultLayout from '../components/DefaultLayout';
import { useParams } from 'react-router-dom';
import { bookCar } from '../redux/actions/bookingActions';
//import {Elements} from '@stripe/react-stripe-js';
//import {loadStripe} from '@stripe/stripe-js';
import StripeCheckout from 'react-stripe-checkout'

//<script src="https://js.Stripe.com/v3/"></script>

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.




const {RangePicker}=DatePicker


const BookingCar = () => {

  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script> 
const {cars}=useSelector((state)=> state.carsReducer);
const [car,setcar]=useState({});
const dispatch=useDispatch();
  const[from,setFrom]=useState();
  const[to,setTo]=useState();
  const[totalHours,setTotalHours]=useState(0);
  const[driver,setdriver]=useState(false);
  const[totalAmount,setTotalAmount]=useState(0);
  const [showModal, setShowModal] = useState(false);

  const {carid}=useParams();
  
  useEffect(()=>{
    if(cars.length==0){
      dispatch(getAllCars());
    }
    else{
      setcar(cars.find((o) => o._id===(carid)));
      console.log(car)
  
    }
  },[cars]);
  

  


  function selectTimeSlots(values)
  {
    
    setFrom(Moment(values[0]).format('MMM DD yyyy HH:mm'));
    setTo(Moment(values[1]).format('MMM DD yyyy HH:mm'));

    setTotalHours(values[1].diff(values[0],'hours'));


  }
  
  function bookNow(){
    const reqObj = {
        
        user: JSON.parse(localStorage.getItem("user"))._id,
        car: car._id,
        totalHours,
        totalAmount,
        driverRequired: driver,
        bookedTimeSlots: {
          from,
          to,
        },
      };
  
      dispatch(bookCar(reqObj));
  }

  

  
  useEffect(()=>
  {
     setTotalAmount((totalHours * car.rentPerDay)/24)
     
  },[totalHours])
  return (
    <DefaultLayout>
      <>
<div className="container">
        <div className="carsingle content_wrapper">
          <div className="carsingle_grid">
            <div className="carsingle_image  p-2 mt-5">
              <img src={car.image} alt={car.model} />
            </div>
            <div className="carsingle_description">
              
              <h2>{car.name}</h2>
              <p>{car.brand}</p>
              <p>{car.category}</p>
              <hr />
              <div className="carsingle_price_details">
                <ul>
                  <li>
                    <span>{car.bags}</span> Airbags
                  </li>
                  <li>
                    <span>{car.persons}</span> Max Persons
                  </li>
                  <li>
                    <span>{car.fuelType}</span>
                  </li>
                  <li>
                    <span>{car.color}</span> Color
                  </li>
                </ul>
                <h5 className="carsingle_price">
                  Rs.{car.rentPerDay}
                  <span>daily</span>
                </h5>
              </div>

              
              <RangePicker
            showTime={{ format: "HH:mm" }}
            format="MMM DD yyyy HH:mm"
            onChange={selectTimeSlots}
          />
          <br/>
          <button className='btn1 mt-2' onClick={()=>{
            setShowModal(true);
          }}
          >
            See Booked Slots
          </button>
          {from && to && (
            <div>
              <p>
                Total Hours : <b>{totalHours}</b>
                <h3>Total Bill : Rs {totalAmount}</h3>
                
                  <button className="btn1" onClick={bookNow}>
                Book Now 
              </button>
              

              
          
              </p>
              </div>
              )}
              
            </div>
          </div>
          


          <div className="carsingle_about">
            <h3>About</h3>
            <hr />
            <p>{car.description}</p>
          </div>
        </div>
      </div>
    </>
  {car.name && (
          <Modal
            visible={showModal}
            closable={false}
            footer={false}
            title="Booked time slots"
          >
            <div className="p-2">
              {car.bookedTimeSlots.map((slot) => {
                return (
                  <button className="btn1 mt-2">
                    {slot.from} - {slot.to}
                  </button>
                );
              })}

              <div className="text-right mt-5">
                <button
                  className="btn1"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  CLOSE
                </button>
              </div>
            </div>
          </Modal>
        )}


    </DefaultLayout>
    
  )
  }

export default BookingCar