import { Card } from "react-bootstrap";
import "./AddFavorite.css";
import { useState } from "react";
import useFavorites from "../../hooks/useFavorites";

function AddFavorite({ aqi }) {
  const [isNewFavorite, setFavorite] = useState(true);
  const { addFavorite } = useFavorites();

  const handleAddFavorite = () => {
    setFavorite(!isNewFavorite);

    if (isNewFavorite) {
        console.log("We are adding a favorite")
      addFavorite(
        aqi.city,
        aqi.state,
        aqi.location.coordinates[1],
        aqi.location.coordinates[0]
      );
    } else {
      // delete from favorites
    }
  };

  return (
    <Card.Link
      className={isNewFavorite ? "on" : "off"}
      onClick={handleAddFavorite}
    >
      &#9733; Add to Favorites{" "}
    </Card.Link>
  );
}

export default AddFavorite;
