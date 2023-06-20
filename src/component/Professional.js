import React,{useContext} from 'react'
import {GlobalContext} from '../GlobalProvider'

function Professional(props) {
  const context =useContext(GlobalContext)
  const [user] = context.userApi.user 

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 text-center'>
          <h3 className='display-3 text-info'>Professional</h3>
        </div>
      </div>
      <div className='row'>
          {
                user && user.map((item,index) => {
                  const {maidenName, email, phone, username, password, ip, address,macAddress,university} =item
                    return(
                        <div className='col-md-6 col-lg-4 col-sm=12 mb-2' key={index}>
                          <div className='card'>
                            <div className='card-header'>
                              <h5 className='text-center text-danger'>{maidenName}</h5>
                            </div>
                            <div className='card-body'>
                              <ul className='list-group'>
                                <li className='list-group-item'>
                                  <strong>Email</strong>
                                  <span className='float-end text-success'>{email}</span>
                                </li>
                                <li className='list-group-item'>
                                  <strong>Phone</strong>
                                  <span className='float-end text-success'>{phone}</span>
                                </li>
                                <li className='list-group-item'>
                                  <strong>Username</strong>
                                  <span className='float-end text-success'>{username}</span>
                                </li>
                                <li className='list-group-item'>
                                  <strong>Password</strong>
                                  <span className='float-end text-success'>{password}</span>
                                </li>
                                <li className='list-group-item'>
                                  <strong>IP</strong>
                                  <span className='float-end text-success'>{ip}</span>
                                </li>
                                <li className='list-group-item'>
                                  <strong>MAC Address</strong>
                                  <span className='float-end text-success'>{macAddress}</span>
                                </li>
                                <li className='list-group-item'>
                                  <strong>Universities</strong>
                                  <span className='float-end text-success'>{university}</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                    )
                })
          }
      </div>
    </div>
  )
}

export default Professional