import React, {useState, useEffect} from 'react';
import "./index.css";
  
  export default function App() {
  const [users, setUsers] =useState([]);
  const getuser = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
  };
  useEffect(() => {
  getuser();
  }, []);
  return (
    <div className="container">
      <h1><i>User Profile in card</i></h1>
      <div className="flex">
        {
          users.map((user) => {
            return (
              <div key={user.id} className="bgcolor">
            
              <img  src={user.avatar} />
              
                <h1>
                  <b>{user.first_name}</b>
                </h1>
                <p>{user.email}</p>
              
              </div>
            );
          })}
      </div>
    </div>
  );
}

