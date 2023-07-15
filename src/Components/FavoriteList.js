const FavoriteList = ({ favoriteBabyList, deleteFromFavorite }) => {
  return (
    <div className="flex-container">
      <h2>
        Favorite List:
        {favoriteBabyList.length === 0 ? (
          <span>Click some names below to add to your shortlist...</span>
        ) : (
          <span></span>
        )}
      </h2>
      <div className="namess">
        {favoriteBabyList.map((baby) => (
          <span
            onClick={() => {
              deleteFromFavorite(baby);
            }}
            className={baby.sex === "f" ? "f-name" : "m-name"}
          >
            {baby.name}
          </span>
        ))}
      </div>
    </div>
  );
};
export default FavoriteList;
