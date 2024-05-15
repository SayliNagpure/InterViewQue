import logo from './logo.svg';
import { useEffect, useState } from "react"
import './App.css';
import UserDetails from './UserDetails';
import { Link } from 'react-router-dom';
const API = `http://localhost:8000/users`
function App() {
  const [userInfo, setUserInfo] = useState([])
  const fetchData = async (geturl) => {
    try {
      const responce = await fetch(geturl)
      const data = await responce.json()
      console.log('data', data)
      setUserInfo(data)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchData(API)
  }, [])

  return (
    <div className="App">
      <Link to="/create">Create</Link>
      <table>
        <tr>
          <thead style={{ display: "flex" }}>
            <th style={{ padding: "20px", margin: "10px", alignItems: "center" }}>UserName</th>
            <th style={{ padding: "25px", margin: "10px", alignItems: "center" }}>Email</th>
            <th style={{ padding: "20px", margin: "10px", alignItems: "end", width: "70px" }}>Role</th>
            <th style={{ padding: "20px", margin: "10px", alignItems: "end" }}>Action</th>
          </thead>
        </tr>

        <tbody>
          <UserDetails userInfo={userInfo} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
