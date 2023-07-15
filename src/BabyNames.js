import { useState } from "react";
import babyNamesData from "./BabyNamesData.json";
import SortAscending from "./Sort";

const babyNames = () => {
  const [keyword, setKeyword] = useState("");
  const [favoriteBabyList, setFavoriteBabyList] = useState([]);
  const [mainBabyList, setMainBabyList] = useState(babyNamesData);
  const addToFavorite = (babyName) => {
    setFavoriteBabyList([...favoriteBabyList, babyName]);
    setMainBabyList(mainBabyList.filter((baby) => baby.name !== babyName.name));
  };
  const deleteFromFavorite = (babyName) => {
    setMainBabyList([...mainBabyList, babyName]);
    setFavoriteBabyList(
      favoriteBabyList.filter((baby) => baby.name !== babyName.name)
    );
  };
  return (
    <>
      <input
        type="text"
        id="baby-search"
        key="search-bar"
        className="form-control"
        placeholder="Baby name..."
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
      />
      <h2>
        Favorite List:
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
      </h2>
      <div className="names">
        {mainBabyList
          .filter((baby) => {
            if (keyword === "") {
              return baby;
            } else if (
              baby.name.toLowerCase().includes(keyword.toLowerCase())
            ) {
              return baby;
            }
          })
          .sort(SortAscending)
          .map((babyName) => {
            return (
              <span
                onClick={() => {
                  addToFavorite(babyName);
                }}
                className={babyName.sex === "f" ? "f-name" : "m-name"}
              >
                {babyName.name}
              </span>
            );
          })}
      </div>
    </>
  );
};
export default babyNames;
