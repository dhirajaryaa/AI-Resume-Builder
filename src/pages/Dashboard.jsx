import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth);
  
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard