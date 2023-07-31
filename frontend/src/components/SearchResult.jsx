import "./SearchResult.css";
import axios from 'axios';

export const SearchResult = ({ result, setData }) => {

  const getFiles = async (result) => {
    try {
      const response = await axios.get(`http://localhost:7190/recommend/${result}`);
      
      console.log(response.data)
      setData(response.data.anime_recommendations)
    } catch (error) {
      console.error('Error getting files', error);
    }
  };

  return (
    <div
      className="search-result"
      onClick={() => getFiles(result)}
    >
      {result}
    </div>
  );
};
