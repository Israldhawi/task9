import { useState } from 'react'
import UserCard from './component/UserCard'
import './App.css'

function App() {
  const users = [
    {
      id: 1,
      name: "Mohammed Rebiye",
      age: 25,
      country: "Oman",
      job: "Software Engineer" 
    },
    {
      id: 2,
      name: "Abdullrahman Aldhawi",
      age: 20,
      country: "Oman",
      job: "Student" 
    },
    {
      id: 3,
      name: "Abdullah Aldhawi",
      age: 49,
      country: "Oman",
      job: "Dental Dentist Assistant " 
    },
  ];
  return (
    <div className='C=container'>
      <h1>User Card</h1>
      {users.map((user) => (
        <UserCard
        key={user.id}
        name={user.name}
        age={user.age}
        country={user.country}
        job={user.job}
        />
      ))}
    </div>
  );
}

export default App;
