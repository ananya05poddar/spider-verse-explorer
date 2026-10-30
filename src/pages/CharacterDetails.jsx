
import { useParams, Link, useLocation } from "react-router-dom";
import characters from "../data/characters";

function CharacterDetails() {
  const { id } = useParams();
  const location = useLocation();

  const character = characters.find(
    (item) => item.id === Number(id)
  );

  if (!character) {
    return <h2>Hero not found!</h2>;
  }

  return (
    <div
      className={`details-page ${
        location.state?.multiverseJump ? "multiverse-jump" : ""
      }`}
    >
      <Link to="/gallery" className="back-button">
        ← Back to Gallery
      </Link>

      <div className="details-container">
        <img
          src={character.image}
          alt={character.name}
          className="details-image"
        />

        <div className="details-content">
          <p className="tagline">MULTIVERSE HERO</p>

          <h1>{character.name}</h1>

          <h3>Universe</h3>
          <p>{character.universe}</p>

          <h3>Superpowers</h3>
          <p>{character.powers}</p>

          <h3>About the Hero</h3>
          <p>{character.description}</p>

          <Link to="/gallery" className="explore-btn">
            Explore More Heroes →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetails;
