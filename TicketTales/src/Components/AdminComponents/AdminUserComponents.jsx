import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminUserComponents() {
  const [userDetails, setUserDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get('http://localhost:8081/AllUserDeatils');
        setUserDetails(response.data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2 style={{marginTop:'100px'}}>Admin User Components</h2>
      <table  style={{ width: '98%' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name </th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {userDetails.map((user, index) => (
            <tr key={index}  style={{ height: "50px" }}>
                <td style={{ padding: "10px", textAlign: "left" ,fontWeight:'bold'}}>
                {user.id}</td>
                <td style={{ padding: "10px", textAlign: "left" ,fontWeight:'bold'}}>
                {user.first_name}</td>
                <td style={{ padding: "10px", textAlign: "left" ,fontWeight:'bold'}}>
                {user.last_name}</td>
                <td style={{ padding: "10px", textAlign: "left" ,fontWeight:'bold'}}>
                {user.email}</td>
                <td style={{ padding: "10px", textAlign: "left" ,fontWeight:'bold'}}>
                  {user.contact_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminUserComponents;
