import StarshipCard from "./StarshipCard";

const StarshipList = ({ starships }) => {
  return (
    <section>
      <h2>Starships ({starships.length})</h2>
      <ul>
        {starships.map((starship) => (
          <StarshipCard key={starship.name} starship={starship} />
        ))}
      </ul>
    </section>
  );
};

export default StarshipList;
