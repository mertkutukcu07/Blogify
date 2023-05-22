/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import {useState, useEffect} from 'react';

const useFetch = url => {
  // States
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // To fetch data
  const fetchData = async () => {
    try {
      const {data: blogData} = await axios.get(url);
      setData(blogData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  // To run fetch function
  useEffect(() => {
    fetchData();
  }, [url]);

  return {data, loading, error};
};

export default useFetch;
