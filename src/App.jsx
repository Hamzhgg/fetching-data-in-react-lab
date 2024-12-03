import { useState, useEffect } from "react";
import "./App.css";
import StarshipSearch from "./components/StarshipSearch";
import StarshipList from "./components/StarshipList";
import { fetchStarships } from "./services/starshipService";

const App = () => {
  const [starships, setStarships] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadStarships = async () => {
      const data = await fetchStarships();
      setStarships(data.results);
    };
    loadStarships();
  }, []);

  const filteredStarships = starships.filter((starship) =>
    starship.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <h1>Star Wars Starships</h1>
      <StarshipSearch setSearchQuery={setSearchQuery} />
      {starships.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <StarshipList starships={filteredStarships} />
      )}
    </main>
  );
};

export default App;
