import "./SearchResult.css";

export const SearchResult = ({ result, setData, setLoading, setResults, based }) => {

  const getFiles = async (animeId) => {
    try {
      setLoading(true)
      setData([])
      
      const response = await fetch(`http://localhost:5000/recommend/${based}/${animeId}`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      // console.log(data)
      setLoading(false)
      setData(data)
      setResults([]);
      
    } catch (error) {
      console.error('Error getting files', error);
    }
  };

  return (
    <div
      className="search-result"
      onClick={() => getFiles(result.id)}
    >
      {result.name}
    </div>
  );
};
