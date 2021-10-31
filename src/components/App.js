import './App.css';
import NavBar from './NavBar';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [routeResponse, setRouteResponse] = useState('');

  useEffect(() => {
    apiRouteTest();
  }, []);

  //Route Test
  const apiRouteTest = async () => {
    try {
      const { data } = await axios.get('/api');
      setRouteResponse(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <NavBar />
      <h1>{routeResponse}</h1>
    </>
  );
}

export default App;
