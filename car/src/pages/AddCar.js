import React from 'react'
import DefaultLayout2 from '../components/DefaultLayout2'
import { useDispatch ,useSelector} from 'react-redux'
import {Col,Row,Form,Input} from 'antd'
import { addCar } from '../redux/actions/carsAction'

function AddCar() {

    const dispatch=useDispatch()
const {loading}=useSelector(state=>state.alertsReducer)
    function onFinish(values)
    {
        values.bookedTimeSlots=[]
        dispatch(addCar(values))
        console.log(values)
    }
  return (
    <DefaultLayout2>
        <div className='addcar'>
<Row justify='center mt-3'>
    <Col  lg={12} sm={24} >
    <Form className=' add-car bs1 p-4 mb-4' layout='vertical' onFinish={onFinish}>
                           <h3>Car Details</h3>
                           <hr />
                           <Form.Item name='name' label='Car name' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='image' label='Image' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='persons' label='Max Persons' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='bags' label='AirBags' rules={[{required: true}]}>
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
                           <button className='btn1'>ADD CAR</button>
                           </div>

                       </Form>
    </Col>
</Row>
</div>
    </DefaultLayout2>
  )
}

export default AddCar