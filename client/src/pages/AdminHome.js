import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DefaultLayout2 from '../components/DefaultLayout2'
import { getAllCars } from '../redux/actions/carsAction'
import Moment from 'moment';
import { Row, Col, Divider, DatePicker, Checkbox } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import { Popconfirm, message } from 'antd';
import { deleteCar } from '../redux/actions/carsAction';

const { RangePicker } = DatePicker
const AdminHome = () => {
  const { cars } = useSelector(state => state.carsReducer)
  const [totalCars, setTotalcars] = useState([])
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getAllCars())

  }, [])

  useEffect(() => {
    setTotalcars(cars)

  }, [cars])




  return (
    <DefaultLayout2>

      <div className='admin'>
        <Row justify='center' gutter={16} className='mt-5'>
          <Col lg={20} sm={24}>
           
          </Col>
        </Row>
        <Row justify='center' gutter={16} className=' ml-4'>
          {totalCars.map(car => {
            return <Col lg={7} sm={24} xs={24}>
              <div className='car p-2 bs1 '>
                <img src={car.image} className="carimg" />
                <div className='car-content d-flex align-items-center justify-content-between'>
                  <div className='text-left pl-2'>
                    <p>{car.name}</p>
                    <p>{car.rentPerDay} Rent Per Day /-</p>
                  </div>
                  <div className='mr-4' >
                    <Link to={`/editcar/${car._id}`}><EditOutlined className='mr-3' style={{ color: "black", cursor: 'pointer' }} /></Link>
                    <Popconfirm
                      title="Delete this Car?"
                      onConfirm={()=>{dispatch(deleteCar({carid:car._id}))}}
                      
                      okText="Yes"
                      cancelText="No"
                    >
                      <DeleteOutlined style={{ color: "red", cursor: 'pointer' }} />
                    </Popconfirm>

                  </div>
                </div>

              </div>
            </Col>
          })}
        </Row>
      </div>
    </DefaultLayout2>
  )
}

export default AdminHome
