import { useEffect, useRef, useState } from "react";

import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { SearchResultsList } from "./components/SearchResultsList";
import { Data } from "./components/Data"

function App() {
  const [results, setResults] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const [based, setBased] = useState("user")

  const searchBarRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="App">
      <div className="search-bar-container" ref={searchBarRef}>
        <SearchBar setResults={setResults} setBased={setBased} based={based} />
        {results && results.length > 0 && <SearchResultsList results={results} setData={setData} setLoading={setLoading} setResults={setResults} based={based} />}
      </div>
      <div className="data">
        {loading ? <h1 className="loader"></h1> :
          <Data data={data} />
        }
      </div>
    </div>
  );
}

export default App;
