
import { useSearchParams } from "react-router-dom";
import characters from "../data/characters";
import CharacterCard from "../components/CharacterCard";

function Gallery() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedUniverse = searchParams.get("universe") || "All";
  const sortOrder = searchParams.get("sort") || "asc";

  const universes = [
    "All",
    ...new Set(characters.map((c) => c.universe))
  ];

  let filteredCharacters = characters.filter((character) => {
    return selectedUniverse === "All" ||
      character.universe === selectedUniverse;
  });

  filteredCharacters.sort((a, b) => {
    return sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  function updateFilter(value) {
    const params = new URLSearchParams(searchParams);

    if (value === "All") {
      params.delete("universe");
    } else {
      params.set("universe", value);
    }

    setSearchParams(params);
  }

  function updateSort(value) {
    const params = new URLSearchParams(searchParams);
    params.set("sort", value);
    setSearchParams(params);
  }

  return (
    <div className="gallery-page">
      <div className="gallery-heading">
        <p className="tagline">DISCOVER YOUR HERO</p>
        <h1>THE SPIDER GALLERY</h1>
        <p>Eight heroes. Eight unique dimensions. One multiverse.</p>
      </div>

      <div className="filters">
        <label>
          Universe:
          <select
            value={selectedUniverse}
            onChange={(e) => updateFilter(e.target.value)}
          >
            {universes.map((universe) => (
              <option key={universe} value={universe}>
                {universe}
              </option>
            ))}
          </select>
        </label>

        <label>
          Sort by:
          <select
            value={sortOrder}
            onChange={(e) => updateSort(e.target.value)}
          >
            <option value="asc">Name A-Z</option>
            <option value="desc">Name Z-A</option>
          </select>
        </label>
      </div>

      <div className="character-grid">
        {filteredCharacters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
