import React, {useState,useEffect } from 'react'
import {  useSelector ,useDispatch} from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import { getAllCars } from '../redux/actions/carsAction'
import Moment from 'moment';
import { Row,Col,Divider,DatePicker, Checkbox } from 'antd';
import {Link, useParams} from 'react-router-dom'
const {RangePicker} =DatePicker




const Home = () => {
    const {cars} = useSelector(state=>state.carsReducer)
    const [totalCars,setTotalcars]=useState([])
    const dispatch=useDispatch()

    
    useEffect(()=>{
        dispatch(getAllCars())

    },[dispatch])

    useEffect(()=>{
      setTotalcars(cars)

  },[cars])

  function filterResult(catItem)
  {
    const result=cars.filter((curData)=>
    {
      return curData.category===catItem;
    });
    setTotalcars(result);
  }
    
  function setFilter(values){

    var selectedFrom = Moment(values[0] , 'MMM DD yyyy HH:mm')
    var selectedTo = Moment(values[1] , 'MMM DD yyyy HH:mm')

    var temp=[]

    for(var car of cars){

          if(car.bookedTimeSlots.length == 0){
              temp.push(car)
          }
          else{

               for(var booking of car.bookedTimeSlots) {

                   if(selectedFrom.isBetween(booking.from , booking.to) ||
                   selectedTo.isBetween(booking.from , booking.to) || 
                   Moment(booking.from).isBetween(selectedFrom , selectedTo) ||
                   Moment(booking.to).isBetween(selectedFrom , selectedTo)
                   )
                   {

                   }
                   else{
                       temp.push(car)
                   }

               }

          }

    }


    setTotalcars(temp)


}
                 

    
  return (
    <DefaultLayout>
      <Row className='mt-3 ml-2' justify='center'>
        <Col lg={20} sm={24} className='d-flex justify-content-left'>
         
        <br/>
        <hr/>
          <button type="button" class="btn btn-info mr-3 ml-6"  onClick={()=>filterResult('Sedan')}>Sedan</button>
          <button type="button" class="btn btn-info"  onClick={()=>filterResult('SUV')}>SUV</button>
          
        </Col>
      </Row>
      <Row  justify='center' gutter={16} className=' ml-4 mt-4'>
        {totalCars.map(car=>{
          return <Col lg={7} sm={24} xs={24}>
            <div className='car p-2 bs1  mt-2'>
              <img src={car.image} className="carimg"/>
              <div className='car-content d-flex align-items-center justify=content-between '>
                <div >
                  <p>{car.name}</p>
                  
                  <p>Rs: {car.rentPerDay} /DAY- </p>
                </div>
                <div  className='text-right ml-3'>
                  <button type="button" class="btn btn-danger ml-5px "><Link to={`/booking/${car._id}`}>Book Car </Link></button>
                </div>
              </div>
              
            </div>
          </Col>
        })}
      </Row>
        </DefaultLayout>
  )
}

export default Home