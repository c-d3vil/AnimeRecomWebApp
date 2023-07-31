import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

export const SearchBar = ({ setResults, setBased, based }) => {
  const [input, setInput] = useState("");
  const [radioValue, setRadioValue] = useState("user");

  const fetchData = async (value) => {
    try {
      const response = await fetch(`http://localhost:5000/search/${value}`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const result = data.anime_matches;
      
      setResults(result);
      
    } catch (error) {
      console.error('Error getting files', error.message);
    }
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const base = (val) => {
    setRadioValue(val)
    setBased(val)
  }

  return (
    <>
    <div className="radio-wrapper">
      <div>
        <input type="radio" 
            id="option1" 
            name="radio-group"
            onChange={e => base("user")} 
            />
            
        <label htmlFor="option1">User Based</label>
      </div>
      <div>
        <input type="radio" id="option2" name="radio-group"
        onChange={e => base("genre")}/>
        <label htmlFor="option2">Genre Based</label>
      </div>
    </div>
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Search any anime..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
    </>
  );
};
