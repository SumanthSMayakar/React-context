import React,{useContext} from 'react'
import {GlobalContext} from '../GlobalProvider'

function Company(props) {
  const context =useContext(GlobalContext)
  const [user] = context.userApi.user 

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 text-center'>
          <h3 className='display-3 text-info'>Company</h3>
        </div>
      </div>
      <div className='row'>
          {
                user && user.map((item,index) => {
                  const {maidenName, company} =item
                    return(
                        <div className='col-md-6 col-lg-4 col-sm=12 mb-2' key={index}>
                          <div className='card'>
                            <div className='card-header'>
                              <h5 className='text-center text-danger'>{maidenName}</h5>
                            </div>
                            <div className='card-body'>
                              <ul className='list-group'>
                                <li className='list-group-item'>
                                  <strong>Address</strong>
                                  <span className='float-end text-success'>{company.address.address}</span>
                                </li>
                                <li className='list-group-item'>
                                  <strong>City</strong>
                                  <span className='float-end text-success'>{company.address.city}</span>
                                </li>
                                <li className='list-group-item'>
                                  <strong>PostalCode</strong>
                                  <span className='float-end text-success'>{company.address.postalCode}</span>
                                </li>
                                <li className='list-group-item'>
                                  <strong>State</strong>
                                  <span className='float-end text-success'>{company.address.state}</span>
                                </li>
                                <li className='list-group-item'>
                                  <strong>latitude</strong>
                                  <span className='float-end text-success'>{company.address.coordinates.lat}</span>
                                </li>
                                <li className='list-group-item'>
                                  <strong>Longitude</strong>
                                  <span className='float-end text-success'>{company.address.coordinates.lng}</span>
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

export default Company