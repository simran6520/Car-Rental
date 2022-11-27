import React from 'react'
import {Row,Col,Form,Input} from 'antd'
import {Link} from "react-router-dom";
import {useDispatch} from 'react-redux'
import { userLogin } from '../redux/actions/userActions';



const Login = () => {
  const dispatch=useDispatch()
  function onFinish(values)
  {
    dispatch(userLogin(values))
    console.log(values)
  }
  return (
    
    <div className='login'>
      <Row gutter={16} style={{position:'relative'}}>
        <Col lg={4}>
          
        </Col>
        <Col lg={16} className='text-left p-6 mt-7'>

          <Form layout='vertical'className='login-form p-5 'onFinish={onFinish}>
            <h1>Login</h1>
            <hr/>
            <Form.Item name='username' label='Username' rules={[{required:true}]}>
              <Input/>
            </Form.Item>

            <Form.Item name='password' label='Password' rules={[{required:true}]}>
              <Input type='password'/>
            </Form.Item>

            <button className='btn1 mt-2'>Login</button>
            <br/>

           <Link to='/register'><h5>Click Here to Register</h5></Link>

          </Form>
        </Col>
      </Row>
        
        </div>
        
  )
}

export default Login