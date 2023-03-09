import superheroes from "./superheroes.json";

const Feed = () => {
  return (
    <div className="heroesbox">
      {superheroes.map((heroes, i) => (
        <div className="heroescontainer">
          <h2>{heroes.superhero}</h2>
          <p>
            Publisher: <span> {heroes.publisher}</span>
          </p>
          <p>
            Alter ego: <span>{heroes.alter_ego} </span>
          </p>
          <p>
            First appearance: <span> {heroes.first_appearance} </span>
          </p>
          <p>
            characters: <span> {heroes.characters}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
