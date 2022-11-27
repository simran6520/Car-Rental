import React, {useState,useEffect } from 'react'
import DefaultLayout2 from '../components/DefaultLayout2'
import { useDispatch ,useSelector} from 'react-redux'
import { getAllCars } from '../redux/actions/carsAction';
import {Col,Row,Form,Input} from 'antd'
import { useParams } from 'react-router-dom';
import { addCar ,editCar } from '../redux/actions/carsAction'


function EditCar() {
const {cars} =useSelector((state)=>state.carsReducer)
    const dispatch=useDispatch()
const {loading}=useSelector((state)=>state.alertsReducer)
const[car,setcar]=useState()
const[totalcars,settotalcars]=useState([])

const {carid}=useParams();
useEffect(()=>{
    if(cars.length==0){
      dispatch(getAllCars());
    }
    else{
        settotalcars(cars)
      setcar(cars.find((o) => o._id===(carid)));
      console.log(car)
  
    }
  },[cars]);
    function onFinish(values)
    {
        values._id=car._id;
        dispatch(editCar(values));
        console.log(values)
    }
  return (
    <DefaultLayout2>
<Row justify='center mt-5'>
    <Col  lg={12} sm={24} >
    {totalcars.length > 0 && (<Form  initialValues={car} className=' add-car bs1 p-4 mb-5' layout='vertical' onFinish={onFinish}>
            <h3>Edit Car</h3>
            <hr/>
            <Form.Item name='name' label='Car name' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='image' label='Image url' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='persons' label='Max Persons' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='bags' label='No of Bags' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='fuelType' label='Fuel Type' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='color' label='Color' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='rentPerDay' label='Rent Per Day' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='brand' label='Brand Name' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='category' label='Category' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='description' label='Description' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>

                           <div className='text-right'>
                           <button className='btn1'>SUBMIT</button>
                           </div>

                       </Form>    )}
    </Col>
</Row>
    </DefaultLayout2>
  )
}

export default EditCar