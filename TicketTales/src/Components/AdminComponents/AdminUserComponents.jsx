import React from 'react'

function AdminUserComponents() {
  const [user, setDetils] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    
    useEffect(() => {
      const fetchuserdetails = async () => {
        try {
          const response = await axios.get("http://localhost:8081/AllUserDeatils");
          setDetils(response.data);
        } catch (error) {
          console.error("Error fetching data", error);
          setError("Failed to load data");
        } finally {
          setLoading(false);
        }
      };
  
      fetchEvents();
    }, []);

  return (
    <div>
      <p>AdminUserComponents</p>
    </div>
  )
}

export default AdminUserComponents
