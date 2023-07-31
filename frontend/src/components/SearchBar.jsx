import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from 'axios';
import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = async (value) => {
    try {
      const response = await axios.get(`http://localhost:7190/search/${value}`);
      
      const result = response.data.anime_matches
      setResults(result);
    } catch (error) {
      console.error('Error getting files', error.message);
    }
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Search any anime ..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
