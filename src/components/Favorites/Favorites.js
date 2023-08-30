import { useFavorites } from "../../hooks/useFavorites";
import Aqi from "../Aqi/Aqi";

const Favorites = () => {
  const { favorites } = useFavorites();
  return (
    <div style={{ margin: "50px 0 50px 0" }}>
      {favorites.length > 0 && (
        <>
          <h2 className="text-center">Favorites - Air Quality Index</h2>
          {favorites.map((aqi) => {
            return (
              <div style={{ marginBottom: "10px" }}>
                <Aqi aqi={aqi} />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Favorites;
