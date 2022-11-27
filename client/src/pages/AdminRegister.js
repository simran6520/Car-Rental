import React from 'react'
import {Row,Col,Form,Input} from 'antd'
import {Link} from "react-router-dom";
import {useDispatch} from 'react-redux'
import { adminRegister } from '../redux/actions/adminActions';




const AdminRegister = () => {
  const dispatch=useDispatch()
  function onFinish(values)
  {
    dispatch(adminRegister(values))
    console.log(values)
  }
  return (
    
    <div className='login'>
      <Row gutter={16} style={{position:'relative'}}>
        <Col lg={5}>
          
        </Col>
        <Col lg={15} className='text-left p-6 mt-7'>

          <Form layout='vertical'className='login-form p-5 ' onFinish={onFinish}>
            <h1>REGISTER</h1>
            <hr/>
            <Form.Item name='username' label='Username' rules={[{required:true}]}>
              <Input/>
            </Form.Item>
            <Form.Item name='email' label='Email Id' rules={[{required:true}]}>
              <Input/>
            </Form.Item>
            <Form.Item name='phone' label='Phone Number' rules={[{required:true}]}>
              <Input/>
            </Form.Item>

            <Form.Item name='password' label='Password' rules={[{required:true}]}>
              <Input type='password'/>
            </Form.Item>

            <Form.Item name='cpassword' label=' Confirm Password' rules={[{required:true}]}>
              <Input type='password'/>
            </Form.Item>
           

            <button className='btn1 mt-2'>Submit</button>
            <br/>
            
            <button type="button" class="btn btn-link"><Link to='/adminlogin'>Click Here to Login</Link></button>
           
            

          </Form>
        </Col>
      </Row>
        
        </div>
        
  )
}


export default AdminRegister