import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const UserDetails = ({userInfo}) => {
  const navigate=useNavigate()
  return (
    <div>
        {
            userInfo.map((i)=>{
              const {username}=i
            return(
              <tr>
                <td>{i.id}</td>
                <td>{username}</td>
                <td>{i.email}</td>
                <td style={{width:"70px"}}>{i.role}</td>
                <td><Link to={`edit/${i.id}`}>Edit</Link>
                <button onClick={e=>handelDelete(i.id)}>Delete</button></td>
              </tr>
            )
            })
        }
    </div>
  )

  function handelDelete(id){
    const confirm=window.confirm("Do u Want to delete")
    if(confirm){
      axios.delete(`http://localhost:8000/users/`+id).then(
        res=>{
          alert("Data deleted Sucessfully")
        }
      ).catch(err=>console.log(err))
    }
    navigate("/")
  }
}

export default UserDetails