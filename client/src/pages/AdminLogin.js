import React from 'react'
import {Row,Col,Form,Input} from 'antd'
import {Link} from "react-router-dom";
import {useDispatch} from 'react-redux'
import { adminLogin } from '../redux/actions/adminActions';



const AdminLogin = () => {
  const dispatch=useDispatch()
  function onFinish(values)
  {
    dispatch(adminLogin(values))
    console.log(values)
  }
  return (
    
    <div className='login'>
      <Row gutter={16} style={{position:'relative'}}>
        <Col lg={4}>
          
        </Col>
        <Col lg={16} className='text-left p-6 mt-7'>

          <Form layout='vertical'className='login-form p-5 'onFinish={onFinish}>
            <h1>SIGN IN</h1>
            <hr/>
            <Form.Item name='username' label='Username' rules={[{required:true}]}>
              <Input/>
            </Form.Item>

            <Form.Item name='password' label='Password' rules={[{required:true}]}>
              <Input type='password'/>
            </Form.Item>

            <button className='btn1 mt-2'>Login</button>
            <br/>

           <Link to='/adminregister'>Click Here to Register</Link>

          </Form>
        </Col>
      </Row>
        
        </div>
        
  )
}

export default AdminLogin