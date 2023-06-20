import React, { useState, useCallback, useEffect } from 'react'
import axios from 'axios'
const url = 'https://dummyjson.com'

function UserAPI() {
    const [users,setUsers] = useState([])

    const initUser = useCallback(() => {
        const getUser =async() => {
            const res = await axios.get(`${url}/users`)
                    // console.log('users=',res)
                    setUsers(res.data.users)
        }

        getUser()
    },[])

    useEffect(() => {
        initUser()
    },[initUser])

  return {
    user: [users,setUsers]
   }
}

export default UserAPI