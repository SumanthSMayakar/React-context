import React, {useContext} from 'react'
import { GlobalContext } from '../GlobalProvider'

function Personal() {
  const context = useContext(GlobalContext)
  const [user] = context.userApi.user
  
  return (
    <div className= "container">
      <div className= "row">
        <div className="col-md-12 text-center">
          <div className="display-3 text-center">Personal</div>
        </div>
      </div>

      <div className="row">
        {
              user && user.map((item,index) => {
                const {id,firstName, lastName, age, image} = item
                return(
                  <div className="col-md-4 col-lg-3 col-sm-6 mt-2 mb-3" key={index}>
                    <div className="card">
                      <img src={image} alt="no image" className="card-img-top" />
                      <div className="card-body" >
                          <h5 className="text-center text-success">{firstName} {lastName}</h5>

                          <ul className="list-group">
                              <li className="list-group-item">
                                <strong>Age</strong>
                                <span className="text-danger float-end">{age} years</span>
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

export default Personal