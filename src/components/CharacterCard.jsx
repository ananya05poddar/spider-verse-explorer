import Reveal from "./Reveal";
import { Link } from "react-router-dom";

function CharacterCard({ character }) {
  return (
  <Reveal>
    <div className="character-card">
      <img src={character.image} alt={character.name} />

      <div className="card-content">
        <h3>{character.name}</h3>
        <p>{character.universe}</p>

        <Link
          to={`/character/${character.id}`}
          className="card-button"
        >
          Explore Hero →
        </Link>
      </div>
    </div>
  </Reveal>
);
}

export default CharacterCard;
