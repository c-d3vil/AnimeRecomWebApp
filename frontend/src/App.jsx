import { useState } from "react";

import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { SearchResultsList } from "./components/SearchResultsList";
import { Data } from "./components/Data"

function App() {
  const [results, setResults] = useState([]);
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} setData={setData} />}
      </div>
      <div className="data">
        <Data data={data} />
      </div>
    </div>
  );
}

export default App;
