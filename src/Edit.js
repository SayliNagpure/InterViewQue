import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {
    const { id } = useParams()
    const [upDate, setUpDate] = useState([])
    const naviget = useNavigate()
    useEffect(() => {
        console.log('id', id)
        axios.get(`http://localhost:8000/users/` + id).then(res => setUpDate(res.data)).catch(err => console.log(err))
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        axios.put(`http://localhost:8000/users/` + id, upDate).then(res => alert("Data UpDated Successfully!")).catch(err => console.log(err))
        naviget("/")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>id</label>
                    <input disabled type="text" name="id" value={upDate?.id} />
                </div>
                <div>
                    <label>UserName</label>
                    <input type="text" name="username" value={upDate.username} onChange={(e) => setUpDate({ ...upDate, username: e.target.value })} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="eamil" value={upDate.email} onChange={(e) => setUpDate({ ...upDate, email: e.target.value })} />
                </div>
                <div>
                    <label>Role</label>
                    <input type="text" name="role" value={upDate.role} onChange={(e) => setUpDate({ ...upDate, role: e.target.value })} />
                </div>
                <div>
                    <button>UpDate</button>
                </div>
            </form>
        </div>
    )
}

export default Edit