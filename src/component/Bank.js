import React,{useContext} from 'react'
import {GlobalContext} from '../GlobalProvider'

function Bank(props) {
  const context =useContext(GlobalContext)
  const [user] = context.userApi.user 

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 text-center'>
          <h3 className='display-3 text-info'>Bank</h3>
        </div>
      </div>
      <div className='row'>
          {
                user && user.map((item,index) => {
                  const {maidenName, bank} =item
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
                                  <span className='float-end text-success'>{bank.cardExpire}</span>
                                </li>
                                <li className='list-group-item'>
                                  <strong>City</strong>
                                  <span className='float-end text-success'>{bank.cardNumber}</span>
                                </li>
                                <li className='list-group-item'>
                                  <strong>PostalCode</strong>
                                  <span className='float-end text-success'>{bank.cardType}</span>
                                </li>
                                <li className='list-group-item'>
                                  <strong>State</strong>
                                  <span className='float-end text-success'>{bank.currency}</span>
                                </li>
                                <li className='list-group-item'>
                                  <strong>latitude</strong>
                                  <span className='float-end text-success'>{bank.iban}</span>
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

export default Bank